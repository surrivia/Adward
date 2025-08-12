import pyttsx3
import speech_recognition as sr
import eel


def Speak(text):
    engine = pyttsx3.init()
    engine.say(text)
    engine.runAndWait()