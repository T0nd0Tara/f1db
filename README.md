# F1DB
An RxJS learning exercise that uses sockets for data

## What's wrong with OrelDB?
1. You have all of the data straight away, This beats the concept of RxJS, as the student question why is it even
   needed.<BR>By using sockets, we assure the data gets in a STREAM, and we never know how many more messages we will
get
2. OrelDB confuses the students with very complex unnecessary pipes
3. Formula 1 is cooler, and it's logical to use with sockets as we can imitate a live race.

## API
When connecting to the server, The race immediately starts, You will get the events LIVE as things happen.
After it ends you will be disconnected from the server, to start another race, just reconnect.
<BR>
This is a short race (about 3 seconds)
<BR>
You can ask for the connection string from your tutor.
### events
- `RADIO` 
- `CROFTY`
- `RACE_STATUS`
- `NEW_LAP`
- `STEWARDS`

### data
every event send the same data:
- `arg 0` - a message (type `string`)
- `arg 1` - the relevant drivers' car number (type `number[]`)

## Exercise
- In the following questions you must use RxJS operators such that the data is printed straight away without waiting for
more data
- Inside the `subscribe` there should only be a `console.log` line without any other code (This is the only place where
you are allowed to print to the console stuff)
<details>
<summary>Q1</summary>

Print every _radio_ message you get
</details>
<details>
<summary>Q2</summary>
Print every message you get (of every message type)
</details>
<details>
<summary>Q3</summary>
Print every message where stroll (car #18) is relevant
</details>
<details>
<summary>Q4</summary>

Rotate between the type messages each new lap, in the order (_RADIO_, _CROFTY_, _RACE_STATUS_, _STEWARDS_)
</details>
<details>
<summary>Q5</summary>

Every new lap, print the next log type, but keep printing old log types, in the order (_RADIO_, _CROFTY_, _RACE_STATUS_, _STEWARDS_).

i.e. <BR>
on lap #0 -> print only _radio_ messages <BR>
on lap #1 -> print _radio_ messages as well as _crofty_ messages<BR>
on lap #2 -> print _radio_ messages, _crofty_ messages, and _race status_ messages<BR>
and so on...<BR>
</details>
<details>
<summary>Q6</summary>
Print the lap number where Alonso (car #14) is firstly mentioned
</details>
