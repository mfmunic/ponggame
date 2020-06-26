Coding Challenge: React Ping Pong!
Your challenge is to build a React web app ping pong game. Initialize the app using Create React App.
In this app, you can assume the user is holding the phone in their hand face up with the screen facing forward.
You will play the game by swinging the phone like it's a ping pong paddle.
You will be playing a robot opponent. You start the game by serving the ball, which you do by swinging the
phone forward like you would a ping pong paddle. You will need to interact with the device's accelerometer and
gyroscope to detect swings. Gameplay works as follows:
● Have the screen show a large number on the center of the screen that starts at zero. This number will
be used to count how many times you have hit the ball during the game.
● Continuously monitor the accelerometer/gyroscope sensor readings
● When you detect the user is swinging the phone forward:
○ Play the attached ping pong ball sound (ball-outgoing.mp3)
○ The robot will return your ball without fail 600 to 800ms later. Play the other ping pong ball
sound (ball-incoming.mp3) when this happens to indicate that the ball is coming back to you
○ After the robot returns the ball, you have 1000ms to swing to return it back to the robot.
■ If you successfully return the ball, the counter should increment and you should wait for
the robot to return the ball again
■ If you fail to return the ball, the game should stop and you should see your score. Play
game-over.mp3 when the game ends.
● After a failure, you should have a button to restart

○ Every 10 times you hit the ball, the robot should get 10% faster in its return, and you get 10%
less time to return the ball

● Bonus Points
○ Keep track of highest score of all time

After you implement the game, please answer the following questions:

1. What is the maximum frequency you can read from the accelerometer/gyroscope at? What are some
   factors that affect this limit?
2. Briefly describe your approach of how you detect a swing using the sensor data.
3. Let's say we wanted to make this game multiplayer instead of single-player. Sketch a high-level block
   diagram of the main components of the system and scope out the call flows (UML or free sketching)
