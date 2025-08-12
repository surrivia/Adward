import eel
import os
from Back.feachers import play_sound
from Back.command import take_command

eel.init('Front/index.html')

play_sound()

os.system('start chrome --app="http://localhost:3001/Front/index.html"')
eel.start('index.html', mode=None, host='localhost',port='3000', block=True)   