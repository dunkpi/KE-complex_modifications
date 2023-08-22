// JavaScript should be written in ECMAScript 5.1.

function main() {
  console.log(
    JSON.stringify(
      {
        title: 'For Japanese （日本語環境向けの設定） (rev 6)',
        rules: [
          {
            description:
              'コマンドキーを単体で押したときに、英数・かなキーを送信する。（左コマンドキーは英数、右コマンドキーはかな） (rev 3)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'left_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              'CTRLキーを単体で押したときに、英数・かなキーを送信する。（左CTRLキーは英数、右CTRLキーはかな）',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'left_control',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_control',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_control',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'right_control',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_control',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_control',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              'オプションキーを単体で押したときに、英数・かなキーを送信する。（左オプションキーは英数キー、右オプションキーはかなキー）',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'left_option',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_option',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_option',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'right_option',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_option',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_option',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              'コマンドキー（左右どちらでも）を単体で押したときに、英数・かなをトグルで切り替える。 (rev 2)',
            manipulators: [
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'ja',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'left_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'en',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'left_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'ja',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'en',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description: '右コマンドキーを、英数・かなのトグルに変更する',
            manipulators: [
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'ja',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                to: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                conditions: [
                  {
                    input_sources: [
                      {
                        language: 'en',
                      },
                    ],
                    type: 'input_source_if',
                  },
                ],
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                to: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              '英数・かなキーを他のキーと同時に押したときに、Optionキーを送信する (rev 3)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'japanese_eisuu',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_alone_timeout_milliseconds': 200,
                },
                to: [
                  {
                    key_code: 'left_option',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'japanese_kana',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_alone_timeout_milliseconds': 200,
                },
                to: [
                  {
                    key_code: 'right_option',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description: 'escキーを押したときに、英数キーも送信する（vim用）',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'escape',
                },
                to: [
                  {
                    key_code: 'escape',
                  },
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
            ],
          },
          {
            description:
              'Ctrl+[を押したときに、英数キーも送信する（vim用） (rev 2)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'open_bracket',
                  modifiers: {
                    mandatory: ['control'],
                  },
                },
                to: [
                  {
                    key_code: 'open_bracket',
                    modifiers: ['control'],
                  },
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
                conditions: [
                  {
                    type: 'keyboard_type_if',
                    keyboard_types: ['ansi', 'iso'],
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['control'],
                  },
                },
                to: [
                  {
                    key_code: 'close_bracket',
                    modifiers: ['control'],
                  },
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
                conditions: [
                  {
                    type: 'keyboard_type_if',
                    keyboard_types: ['jis'],
                  },
                ],
              },
            ],
          },
          {
            description: 'Ctrl+[を押したときに、escキーと英数キーを送信する',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'open_bracket',
                  modifiers: {
                    mandatory: ['control'],
                  },
                },
                to: [
                  {
                    key_code: 'escape',
                  },
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
                conditions: [
                  {
                    type: 'keyboard_type_if',
                    keyboard_types: ['ansi', 'iso'],
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'close_bracket',
                  modifiers: {
                    mandatory: ['control'],
                  },
                },
                to: [
                  {
                    key_code: 'escape',
                  },
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
                conditions: [
                  {
                    type: 'keyboard_type_if',
                    keyboard_types: ['jis'],
                  },
                ],
              },
            ],
          },
          {
            description: '英数・かなキーをtoggle方式にする',
            manipulators: [
              {
                conditions: [
                  {
                    type: 'input_source_if',
                    input_sources: [
                      {
                        language: 'ja',
                      },
                    ],
                  },
                ],
                type: 'basic',
                from: {
                  key_code: 'japanese_kana',
                },
                to: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                conditions: [
                  {
                    type: 'input_source_unless',
                    input_sources: [
                      {
                        language: 'ja',
                      },
                    ],
                  },
                ],
                type: 'basic',
                from: {
                  key_code: 'japanese_eisuu',
                },
                to: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              '右コマンドキーを単体で押したときに、かなキーを送信、左コントロールキーを単体で押したときに、英数キーを送信する。 (rev 2)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'left_control',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_control',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_control',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'right_command',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_command',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_command',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
                  },
                ],
              },
            ],
          },
          {
            description:
              'シフトキーを単体で押したときに、英数・かなキーを送信する。（左シフトキーは英数、右シフトキーはかな)',
            manipulators: [
              {
                type: 'basic',
                from: {
                  key_code: 'left_shift',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'left_shift',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'left_shift',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_eisuu',
                  },
                ],
              },
              {
                type: 'basic',
                from: {
                  key_code: 'right_shift',
                  modifiers: { optional: ['any'] },
                },
                parameters: {
                  'basic.to_if_held_down_threshold_milliseconds': 100,
                },
                to: [
                  {
                    key_code: 'right_shift',
                    lazy: true,
                  },
                ],
                to_if_held_down: [
                  {
                    key_code: 'right_shift',
                  },
                ],
                to_if_alone: [
                  {
                    key_code: 'japanese_kana',
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