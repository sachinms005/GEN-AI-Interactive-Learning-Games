import streamlit as st
import openai
import random
import json
import time
import pyttsx3  # For text-to-speech
import speech_recognition as sr  # For speech-to-text
import sqlite3  # For leaderboard database

# Set up OpenAI API key (Replace with your own key)
openai.api_key = "your_openai_api_key"

# Initialize Text-to-Speech Engine
engine = pyttsx3.init()

def speak(text):
    """Convert text to speech"""
    engine.say(text)
    engine.runAndWait()

def recognize_speech():
    """Convert speech to text"""
    recognizer = sr.Recognizer()
    with sr.Microphone() as source:
        st.info("Listening...")
        try:
            audio = recognizer.listen(source)
            text = recognizer.recognize_google(audio)
            return text
        except sr.UnknownValueError:
            return "Sorry, I could not understand."
        except sr.RequestError:
            return "Could not request results, check your connection."

# Database Setup for Leaderboard
def create_leaderboard_table():
    conn = sqlite3.connect("leaderboard.db")
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS leaderboard (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            score INTEGER
        )
    """)
    conn.commit()
    conn.close()

create_leaderboard_table()

def update_leaderboard(name, score):
    conn = sqlite3.connect("leaderboard.db")
    c = conn.cursor()
    c.execute("INSERT INTO leaderboard (name, score) VALUES (?, ?)", (name, score))
    conn.commit()
    conn.close()

def get_leaderboard():
    conn = sqlite3.connect("leaderboard.db")
    c = conn.cursor()
    c.execute("SELECT name, score FROM leaderboard ORDER BY score DESC LIMIT 5")
    top_players = c.fetchall()
    conn.close()
    return top_players

# Score Tracking
if "score" not in st.session_state:
    st.session_state.score = 0
if "player_name" not in st.session_state:
    st.session_state.player_name = ""

# Game Categories
game_types = ["Quiz", "Storytelling", "Puzzle", "Math Challenge"]

def generate_game_prompt(game_type):
    prompts = {
        "Quiz": "Generate a multiple-choice question on science with 4 options and the correct answer.",
        "Storytelling": "Start an engaging fantasy story and ask the user what happens next.",
        "Puzzle": "Create a logical puzzle or riddle with a clear answer.",
        "Math Challenge": "Create a math challenge question for kids with a clear answer."
    }
    return prompts.get(game_type, "Generate a fun educational game question.")

def generate_ai_content(game_type):
    """Generate AI content for the selected game"""
    prompt = generate_game_prompt(game_type)
    response = openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "system", "content": f"You are an AI {game_type.lower()} master."},
                  {"role": "user", "content": prompt}]
    )
    return response["choices"][0]["message"]["content"]

# Streamlit UI
st.title("🎮 Gen AI Interactive Learning Games")

# Player Name Input
st.session_state.player_name = st.text_input("Enter your name:", st.session_state.player_name)

# Game Selection
game_choice = st.selectbox("Choose a game type:", game_types)

if st.button("Start Game"):
    st.subheader(f"{game_choice} Mode")
    game_content = generate_ai_content(game_choice)
    st.write(game_content)
    speak(game_content)

# User Interaction
user_input = st.text_input("Your Answer / Next Step:")
if st.button("Submit"):
    with st.spinner("AI is thinking..."):
        time.sleep(2)
        ai_response = openai.ChatCompletion.create(
            model="gpt-4",
            messages=[{"role": "system", "content": "You are an AI that provides responses to user inputs in a game."},
                      {"role": "user", "content": user_input}]
        )
    response_text = ai_response["choices"][0]["message"]["content"]
    st.write(response_text)
    speak(response_text)
    
    # Score Update
    if "correct" in response_text.lower() or "well done" in response_text.lower():
        st.session_state.score += 10
    elif "incorrect" in response_text.lower() or "try again" in response_text.lower():
        st.session_state.score -= 5

    st.write(f"🏆 Your Score: {st.session_state.score}")

# Voice Input Option
if st.button("Use Voice Input 🎙️"):
    spoken_text = recognize_speech()
    st.text_input("Your Answer / Next Step:", value=spoken_text, key="voice_input")

# Update Leaderboard
if st.button("Save Score"):
    if st.session_state.player_name:
        update_leaderboard(st.session_state.player_name, st.session_state.score)
        st.success("Score saved!")
    else:
        st.error("Please enter your name before saving.")

# Display Leaderboard
st.subheader("🏅 Leaderboard")
top_players = get_leaderboard()
for i, (name, score) in enumerate(top_players, start=1):
    st.write(f"{i}. {name} - {score} points")
