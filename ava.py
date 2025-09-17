import pyautogui
import time

pyautogui.press("win")
pyautogui.write("google chrome")
pyautogui.press("enter")
time.sleep(0.8)
pyautogui.click(x=766, y=589)
pyautogui.press("enter")
pyautogui.write("https://ava.sesisenai.org.br/login/index.php")
pyautogui.press("enter")
time.sleep(1)
pyautogui.leftClick(x=1453, y=586)
time.sleep(4.5)
pyautogui.leftClick(x=404, y=594)
# pyautogui.click(x=1453, y=586)


