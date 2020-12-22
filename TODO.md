# OH-MY-POSH3

<link rel="stylesheet" href="https://www.nerdfonts.com/assets/css/combo.css">
<!--Add `Nerd Fonts` icons with <i> tag-->

<!--This stylesheet is messing with the font though-->

## TODO

Mainly features found in zsh theme - [powerlevel10k](https://github.com/romkatv/powerlevel10k).

In order of priority:

- [ ] Add additional options for `powerline` style segments:
		- `left_powerline_symbol`: str
		- `right_powerline_symbol`: str
		example use case: having a different prompt head and prompt tail.
		As in this [gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

<img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif" width="500" align="center">

- [ ] Add "[transient prompt](https://github.com/romkatv/powerlevel10k#transient-prompt)" feature
		trims prompt when accepting a command line
		example:

<img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/transient-prompt.gif" width="500" align="center">

- [ ] Add "[instant prompt](https://github.com/romkatv/powerlevel10k#instant-prompt)" feature
		Renders prompt immediately after command is executed, so you can start typing quickly.

<img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/instant-prompt.gif" width="500" align="center">

- [ ] Add most of [these](https://github.com/romkatv/powerlevel10k#batteries-included) segments

- [ ] Add a list of different icons suitable for use with segments,
		so that users do not have to keep searching for the right icons
		See more icons at [Nerd Fonts](https://www.nerdfonts.com/cheat-sheet) offical website.
		Example (Using Nerd Fonts patched **Meslo** font):

  - `\uE606`: <i class="nf nf-dev-python"></i> for pyenv, virtualenv etc.
  - `\uE70F`: <i class="nf nf-dev-windows"></i> as alternative for windows os identifier

- [ ] Add functionality to add rprompt as in zsh.
		Rprompt in zsh allows you to have a prompt on the right side of the terminal,
		on the line you are currently typing.

- [ ] Add a basic configuration wizard like powerlevel10k has.

<img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif" width="500" align="center">

- [ ] Add "[show on command](https://github.com/romkatv/powerlevel10k#show-on-command)" feature
		Adds relevant segments, only when the command being currently typed, is related

<img src="https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/show-on-command.gif" width="500" align="center">
