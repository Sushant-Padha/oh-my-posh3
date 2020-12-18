# OH-MY-POSH3

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" href="https://raw.githubusercontent.com/ryanoasis/nerd-fonts/master/css/nerd-fonts-generated.css">
<!--Add `Font Awesome` and `Nerd Fonts` icons with <i> tag-->

## TODO

Mainly features found in zsh theme - [powerlevel10k](https://github.com/romkatv/powerlevel10k).

In order of priority:

- [ ] Add additional options for `powerline` style segments:
		- `left_powerline_symbol`: str
		- `right_powerline_symbol`: str
		example use case: having a different prompt head and prompt tail.
		As in this [gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)
		![](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/configuration-wizard.gif)

- [ ] Add "[transient prompt](https://github.com/romkatv/powerlevel10k#transient-prompt)" feature
		trims prompt when accepting a command line
		example:
		![transient-prompt.gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/transient-prompt.gif)

- [ ] Add "[instant prompt](https://github.com/romkatv/powerlevel10k#instant-prompt)" feature
		Renders prompt immediately after command is executed, so you can start typing quickly.
		![instant-prompt.gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/instant-prompt.gif)

- [ ] Add most of [these](https://github.com/romkatv/powerlevel10k#batteries-included) segments

- [ ] Add a list of different icons suitable for use with segments,
		so that users do not have to keep searching for the right icons
		Example (Using Nerd Fonts patched **Meslo** font):
		- `\uE606`: <i class="nf nf-dev-python"></i> for pyenv, virtualenv etc.
		- `\uE70F`: <i class="nf nf-dev-windows"></i> as alternative for windows os identifier
		See more icons at [Nerd Fonts](https://www.nerdfonts.com/cheat-sheet) offical website.

- [ ] Add a basic configuration wizard like powerlevel10k has.

- [ ] Add "[show on command](https://github.com/romkatv/powerlevel10k#show-on-command)" feature
		Adds relevant segments, only when the command being currently typed, is related
		![show-on-command.gif](https://raw.githubusercontent.com/romkatv/powerlevel10k-media/master/show-on-command.gif)

