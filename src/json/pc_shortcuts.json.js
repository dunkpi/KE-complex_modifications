// JavaScript should be written in ECMAScript 5.1.

const karabiner = require('../lib/karabiner')

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'PC-Style Shortcuts',
        rules: [
          {
            description: 'Home key to the beginning of the line (Control + a)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'home', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'a', modifiers: ['left_control'] }],
              },
            ],
          },
          {
            description: 'End key to the end of the line (Control + e)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'end', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'e', modifiers: ['left_control'] }],
              },
            ],
          },
          {
            description: 'Home key to the beginning of the sentence (Command + Left). Doesnt work in terminal',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'home', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'left_arrow', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'End key to the end of the sentence (Command + Right). Doesnt work in terminal',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'end', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'right_arrow', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'PC-Style Home/End',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'home', modifiers: { optional: ['shift'] } },
                to: [{ key_code: 'left_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.browser,
                      karabiner.bundleIdentifiers.gitGUI,
                      karabiner.bundleIdentifiers.jetbrainsIDE,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'home', modifiers: { optional: ['shift'] } },
                to: [{ key_code: 'a', modifiers: ['left_control'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'home', modifiers: { mandatory: ['control'], optional: ['shift'] } },
                to: [{ key_code: 'up_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.gitGUI,
                      karabiner.bundleIdentifiers.jetbrainsIDE,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'end', modifiers: { optional: ['shift'] } },
                to: [{ key_code: 'right_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.browser,
                      karabiner.bundleIdentifiers.gitGUI,
                      karabiner.bundleIdentifiers.jetbrainsIDE,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'end', modifiers: { optional: ['shift'] } },
                to: [{ key_code: 'e', modifiers: ['left_control'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'end', modifiers: { mandatory: ['control'], optional: ['shift'] } },
                to: [{ key_code: 'down_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.gitGUI,
                      karabiner.bundleIdentifiers.jetbrainsIDE,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Copy (Ctrl+Insert) for JIS/PC keyboard',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'insert', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'c', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'PC-Style Paste (Shift+Insert) for JIS/PC keyboard',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'insert', modifiers: { mandatory: ['shift'], optional: ['any'] } },
                to: [{ key_code: 'v', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'PC-Style Paste(Shift+Fn) for ANSI keyboard',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'fn', modifiers: { mandatory: ['shift'], optional: ['any'] } },
                to: [{ key_code: 'v', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'Option(Alt)+Tab as Switch Application (Command+Tab)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'tab', modifiers: { mandatory: ['option'], optional: ['any'] } },
                to: [{ key_code: 'tab', modifiers: ['left_command'] }],
              },
            ],
          },
          {
            description: 'PC-Style Control+Up/Down/Left/Right',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'left_arrow', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'left_arrow', modifiers: ['left_option'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'right_arrow', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'right_arrow', modifiers: ['left_option'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'up_arrow', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'up_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'down_arrow', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'down_arrow', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Copy/Paste/Cut',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'c', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'c', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'v', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'v', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'x', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'x', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Undo',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'z', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'z', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Redo',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'y', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'z', modifiers: ['left_command', 'left_shift'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Select-All',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'a', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'a', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Save',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 's', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style New',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'n', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'n', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Reload(F5, Ctrl+R)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'r', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'r', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'f5', modifiers: { optional: ['any'] } },
                to: [{ key_code: 'r', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style New Tab',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 't', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 't', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Find',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'f', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'g', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'g', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Open',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'o', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'o', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Bold/Italic/Underline(Ctrl+B/I/U)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'b', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'b', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'i', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'i', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
              {
                type: 'basic',
                from: { key_code: 'u', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'u', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Close Window',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'w', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'w', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Emoji Picker (Command+.)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'period', modifiers: { mandatory: ['command'] } },
                to: [{ key_code: 'spacebar', modifiers: ['left_control', 'left_command'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Spotlight Search (Command+S)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 's', modifiers: { mandatory: ['command'] } },
                to: [{ key_code: 'spacebar', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Switch Input (Command+Space)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'spacebar', modifiers: { mandatory: ['command'] } },
                to: [{ key_code: 'spacebar', modifiers: ['left_control'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Lock Screen',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { mandatory: ['command'] } },
                to: [{ key_code: 'power', modifiers: ['left_control', 'left_shift'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Screenshot to File (PrintScreen to select)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'print_screen', modifiers: { optional: ['any'] } },
                to: [{ key_code: '4', modifiers: ['left_command', 'left_shift'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Screenshot to Clipboard (PrintScreen to select)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'print_screen', modifiers: { optional: ['any'] } },
                to: [{ key_code: '4', modifiers: ['left_command', 'left_control', 'left_shift'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Screenshot (PrintScreen for whole, Shift+PrintScreen to select)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'print_screen', modifiers: { mandatory: ['shift'], optional: ['any'] } },
                to: [{ key_code: '4', modifiers: ['left_command', 'left_shift'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
              {
                type: 'basic',
                from: { key_code: 'print_screen', modifiers: { optional: ['any'] } },
                to: [{ key_code: '3', modifiers: ['left_command', 'left_shift'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Quit Application (Alt+F4 to Command+Q)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'f4', modifiers: { mandatory: ['option'] } },
                to: [{ key_code: 'q', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'Command+E Opens Finder',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'e', modifiers: { mandatory: ['command'] } },
                to: [{ shell_command: "open -a 'Finder.app'" }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'Control+Esc Opens Launchpad',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'escape', modifiers: { mandatory: ['control'] } },
                to: [{ key_code: 'launchpad', modifiers: [] }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'Control+Shift+Esc Opens Activity Monitor',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'escape', modifiers: { mandatory: ['control', 'shift'] } },
                to: [{ shell_command: "open -a 'Activity Monitor.app'" }],
                conditions: [{ type: 'frontmost_application_unless', bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine) }],
              },
            ],
          },
          {
            description: 'PC-Style Browser open location (Ctrl+L)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'l', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'l', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
            ],
          },
          {
            description: 'PC-Style Back/Forward (Alt+Left Arrow/Alt+Right Arrow)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'left_arrow', modifiers: { mandatory: ['option'], optional: ['any'] } },
                to: [{ key_code: 'left_arrow', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'right_arrow', modifiers: { mandatory: ['option'], optional: ['any'] } },
                to: [{ key_code: 'right_arrow', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
            ],
          },
          {
            description: 'PC-Style Browser Zoom (Ctrl+Plus/Minus/0)',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'hyphen', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'hyphen', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'keypad_hyphen', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'keypad_hyphen', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'equal_sign', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'equal_sign', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'keypad_plus', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'keypad_plus', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: '0', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: '0', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
              {
                type: 'basic',
                from: { key_code: 'keypad_0', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'keypad_0', modifiers: ['left_command'] }],
                conditions: [{ type: 'frontmost_application_if', bundle_identifiers: karabiner.bundleIdentifiers.browser }],
              },
            ],
          },
          {
            description: 'PC-Style Control+Delete/Backspace',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'delete_or_backspace', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'delete_or_backspace', modifiers: ['option'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Control+Delete',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'delete_forward', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'delete_forward', modifiers: ['option'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(karabiner.bundleIdentifiers.remoteDesktop, karabiner.bundleIdentifiers.virtualMachine, karabiner.bundleIdentifiers.terminal),
                  },
                ],
              },
            ],
          },
          {
            description: 'PC-Style Control+K',
            manipulators: [
              {
                type: 'basic',
                from: { key_code: 'k', modifiers: { mandatory: ['control'], optional: ['any'] } },
                to: [{ key_code: 'k', modifiers: ['left_command'] }],
                conditions: [
                  {
                    type: 'frontmost_application_unless',
                    bundle_identifiers: [].concat(
                      karabiner.bundleIdentifiers.remoteDesktop,
                      karabiner.bundleIdentifiers.virtualMachine,
                      karabiner.bundleIdentifiers.terminal,
                      karabiner.bundleIdentifiers.emacs
                    ),
                  },
                ],
              },
            ],
          },
        ],
      },
      null,
      '  '
    )
  )
}

main()
