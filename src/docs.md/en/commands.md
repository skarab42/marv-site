# Actions

## Actions List

### OBS | Scenes List
Show the available scenes in OBS.  
Right mouse on a scene in the list will enable it in OBS.
#### Parameters
- Triggers : [check the list](/en/docs/actions#triggers)
- Events : [check the list](/en/docs/actions#events)
#### Information
Only the events **None** and **Command** are available for now.

### OBS | Go to the scene
Show a specific available scene in OBS..  
Right mouse on the button will enable the scene in OBS.
#### Parameters
- Scene : Selection of a scene available in OBS 
- Trigger : [check the list](/en/docs/actions#triggers)
- Event : [check the list](/en/docs/actions#events)

### OBS | Switch between two scenes
Display two available scenes in OBS.  
Right mouse activate a scene which wasn't active in OBS.
#### Parameters
- Scene 1 : Selection of a scene available in OBS
- Scene 2 : Selection of a scene available in OBS
- Trigger : [check the list](/en/docs/actions#triggers)
- Event : [check the list](/en/docs/actions#events)

### Animation
Animation with a timeline
#### Parameters
- Timeline editing : [check the manual](/en/docs/timeline)
- Trigger : [check the list](/en/docs/actions#triggers)
- Event : [check the list](/en/docs/actions#events)

### Twitch chat
Display Twitch chat from a specific channel
#### Parameters
- Channel :  Twitch channel name
  - Default chat is the one of the connected Twitch channel
- Theme : color theme
  - dark
  - light
#### Information
You can't be in **EDITION** mode in order to interact with the widget.  
After adding an action it is recommended to resize the button in order to be able to click on the **accept cookies** button.

### Twitch stream
Display Twitch live stream from a specific channel
#### Parameters
- Channel :  Twitch channel name
  - Default channel is the currently connected Twitch account
- Mute : Disable audio from the video
- Auto-play : automatic reading

### Rewards
**Only for affiliated streamers / twitch partners**  
Display the rewards list claimed with channel points

### Commands
Display the chat commands list defined with Marv.  
Two-step setup.  
#### Parameters
- Prefix : at the start of a command
You don't have to start with **!**.
#### Information
With a new widget, you get a menu to add new commands to your prefix.
With each command you can : 
- enable / disable the command
- edit the command parameters
- delete the command
#### Command parameters
- Command : the command name to which the widget prefix will be added
- Variables : the words after the command are injected into the `n` variables defined in this field
  - for example :
  *!position 12 27*
    The `!position` command has two parameters x and y.  
    Define the variables with `x y` values.
    When I get `!position 12 56` then the value `12` is stored in `x` and `56` stored in `y`
- Description : description displayed next to the command in the widget
- Cooldown : time in seconds before possible reuse
- Message : message sent to the chat
  - [support ejs scripting](https://ejs.co/#docs)

### Fans
**Only for affiliated streamers / twitch partners**  
Displays the most recent subscribers list

## Triggers
Define when the action is executed  
- immediate : cancels everything else 
- queue : queued
- asap : occurs as soon as possible

## Events
**For every streamers**
- None
- Action : action type message in the chat which can be like /me <message>
- Ban : When you ban a user from the chat
- Command : specific to the commands defined in Marv
- Follow : when a user follows a channel
- Hosted : When the channel is hosted by someone else
- Join : when a user joins the chat
- Message : when a user sends a message on the chat
- Leave : when a user leaves the chat
- Raid : when a user starts raiding your channel

**Only for affiliated streamers / twitch partners**
- Bits : a user gives some bits to the channel
- Bits badge upgrade : a user upgrades his badge by giving bits
- Community pay forward : a user pays forward a subscription that was gifted to them to the community
- Community sub : a user gifts random subscriptions to the community
- Gift paid upgrade : a user upgrades his gift subscription to a paid subscription
- Prime community gift : a user gifts a Twitch Prime to another user
- Prime paid upgrade : a user upgrades his Prime subscription to a paid subscription
- Redemption : a user redeems his channel points for a reward
- Reward gift : a user gifts rewards during a special event
- Ritual : a user performs a "ritual" in your channel, i.e. first talking of a newcomer in the chat window
- Standard pay forward :  a user pays forward a subscription that was gifted to them to a specific user
- Sub : a user subscribes to the channel
- Sub extend : user extends their subscription
- Sub gift : a user gifts a subscription to another user
