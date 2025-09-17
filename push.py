import pyautogui
import time


pyautogui.hotkey("Ctrl", "'")
pyautogui.write("git add .")
pyautogui.press("enter")
pyautogui.write('git commit -m "Automatizando projeto"')
pyautogui.press('enter')
pyautogui.write("git push")
pyautogui.press("enter")


