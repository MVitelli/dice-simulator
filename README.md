dice-simulator
=================

Dice simulator


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/dice-simulator.svg)](https://npmjs.org/package/dice-simulator)
[![Downloads/week](https://img.shields.io/npm/dw/dice-simulator.svg)](https://npmjs.org/package/dice-simulator)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g dice-simulator
$ dice-simulator COMMAND
running command...
$ dice-simulator (--version)
dice-simulator/0.0.0 darwin-x64 node-v20.15.0
$ dice-simulator --help [COMMAND]
USAGE
  $ dice-simulator COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`dice-simulator hello PERSON`](#dice-simulator-hello-person)
* [`dice-simulator hello world`](#dice-simulator-hello-world)
* [`dice-simulator help [COMMAND]`](#dice-simulator-help-command)
* [`dice-simulator plugins`](#dice-simulator-plugins)
* [`dice-simulator plugins add PLUGIN`](#dice-simulator-plugins-add-plugin)
* [`dice-simulator plugins:inspect PLUGIN...`](#dice-simulator-pluginsinspect-plugin)
* [`dice-simulator plugins install PLUGIN`](#dice-simulator-plugins-install-plugin)
* [`dice-simulator plugins link PATH`](#dice-simulator-plugins-link-path)
* [`dice-simulator plugins remove [PLUGIN]`](#dice-simulator-plugins-remove-plugin)
* [`dice-simulator plugins reset`](#dice-simulator-plugins-reset)
* [`dice-simulator plugins uninstall [PLUGIN]`](#dice-simulator-plugins-uninstall-plugin)
* [`dice-simulator plugins unlink [PLUGIN]`](#dice-simulator-plugins-unlink-plugin)
* [`dice-simulator plugins update`](#dice-simulator-plugins-update)

## `dice-simulator hello PERSON`

Say hello

```
USAGE
  $ dice-simulator hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ dice-simulator hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/MVitelli/dice-simulator/blob/v0.0.0/src/commands/hello/index.ts)_

## `dice-simulator hello world`

Say hello world

```
USAGE
  $ dice-simulator hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ dice-simulator hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/MVitelli/dice-simulator/blob/v0.0.0/src/commands/hello/world.ts)_

## `dice-simulator help [COMMAND]`

Display help for dice-simulator.

```
USAGE
  $ dice-simulator help [COMMAND...] [-n]

ARGUMENTS
  COMMAND...  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for dice-simulator.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.8/src/commands/help.ts)_

## `dice-simulator plugins`

List installed plugins.

```
USAGE
  $ dice-simulator plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ dice-simulator plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/index.ts)_

## `dice-simulator plugins add PLUGIN`

Installs a plugin into dice-simulator.

```
USAGE
  $ dice-simulator plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dice-simulator.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DICE_SIMULATOR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DICE_SIMULATOR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dice-simulator plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dice-simulator plugins add myplugin

  Install a plugin from a github url.

    $ dice-simulator plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dice-simulator plugins add someuser/someplugin
```

## `dice-simulator plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ dice-simulator plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ dice-simulator plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/inspect.ts)_

## `dice-simulator plugins install PLUGIN`

Installs a plugin into dice-simulator.

```
USAGE
  $ dice-simulator plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into dice-simulator.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the DICE_SIMULATOR_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the DICE_SIMULATOR_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ dice-simulator plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ dice-simulator plugins install myplugin

  Install a plugin from a github url.

    $ dice-simulator plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ dice-simulator plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/install.ts)_

## `dice-simulator plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ dice-simulator plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ dice-simulator plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/link.ts)_

## `dice-simulator plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dice-simulator plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dice-simulator plugins unlink
  $ dice-simulator plugins remove

EXAMPLES
  $ dice-simulator plugins remove myplugin
```

## `dice-simulator plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ dice-simulator plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/reset.ts)_

## `dice-simulator plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dice-simulator plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dice-simulator plugins unlink
  $ dice-simulator plugins remove

EXAMPLES
  $ dice-simulator plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/uninstall.ts)_

## `dice-simulator plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ dice-simulator plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  PLUGIN...  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ dice-simulator plugins unlink
  $ dice-simulator plugins remove

EXAMPLES
  $ dice-simulator plugins unlink myplugin
```

## `dice-simulator plugins update`

Update installed plugins.

```
USAGE
  $ dice-simulator plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.2/src/commands/plugins/update.ts)_
<!-- commandsstop -->
