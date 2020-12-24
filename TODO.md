# OH-MY-POSH3

<link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/combo.css">
<!--Add `Nerd Fonts` icons with <i> tag-->

<!--This stylesheet is messing with the font though-->

## TODO

Rethink these names and hierarchy of these options.

1. [ ] Add the following properties in `block` object:
   Make branch `prompt-head-tail-connector` for this.
   Name the pull request:
   > feat: added prompt head, tail, connector options
   >
   > Adds options to set prompt head, tail and connector
   > as found in the powerlevel10k theme for zsh
   >

   - [ ] prompt_head: `str` The character to use as the head of the prompt block.
     This is the leftmost character in a right-aligned prompt,
     and the rightmost character in a left-aligned prompt.
     Will have the foreground color same as the background color of the previous prompt segment.
     Defaults to empty.

   - [ ] prompt_tail: `str` The character to use as the last character of the prompt.
     Will have the foreground color same as the background color of the last prompt segment.
     Defaults to an emty string

   - [ ] prompt_connector: `str` The character(s) to be used between the left and right prompt
     blocks on the same line to connect them.
     If more string is more than character, it will be repeated until it fills
     as much of the space.
     Defaults to space character.

   - [ ] properties: `[]object` Properties related to blocks and their configuration.
     - [ ] prompt_connecter: `[]string`
       - [ ] foreground_color: `color`
       - [ ] foreground_color: `color`

2. [ ] Add the following segments (segment features):
   Make seperate branches for each segment.
   Name the pull request like this:
   >
   >feat: added segment < segment >
   >< body >
   >
  
   - [ ] Background jobs
   - [ ] Command number
     - shows the number of prompt
     - Will help in using number to execute previous command
   - [ ] Extract info from `package.json`
   - [ ] `battery` segment
     - Add custom glyphs/icons for different ranges of battery
     - See [distatus/battery](github.com/distatus/battery)
     - For glyphs, see characters between hex F578 - F583
   - [ ] IP (from any desired interface)
   - [ ] Public IP
   - [ ] **SYSTEM MONITORING**
       > choose category
       > receive/read or send/write or both
       > choose desired unit
       > choose time interval
     - [ ] Network usage
     - [ ] CPU Usage
     - [ ] RAM Usage
     - [ ] SWAP Usage
     - [ ] I/O

3. [ ] Fix the following bugs:
   Make a seperate branch for each bug fix.
   Name the pull request like this:
   >
   >fix: < title >
   >< body >
   >ref: #< issue number >
   >

   - [ ] `battery` segment
     - battery level stuck on 100%
