# kp-rbxts-kit

[![CI](https://github.com/kpapa05/kp-rbxts-kit/actions/workflows/ci.yml/badge.svg)](https://github.com/kpapa05/kp-rbxts-kit/actions/workflows/ci.yml)

A heavily opinionated starter kit for developing multiplace Roblox games with TypeScript. This repository includes boilerplate code and a carefully curated set of packages and tools I use when starting a new project.

## Description

The multiplace setup in this repository works by splitting your main game code into distinct place folders (e.g., `/src/client/modules/game` and `/src/client/modules/lobby`, with a single common folder). The code for every place ultimately is included in the build of every place, but only the relevant code is bootstrapped based on the environment variables. This is architected this way to allow for trivial code sharing between places while avoiding the complexities of managing multiple repositories, packages, monorepos, etc.

You should pay close attention to how you are utilizing environment variables with this setup. By design, all environment variables are included in a shared directory, meaning any variable you define will be exposed to the client. This is done intentionally as environment variables in this context should only be used for non-sensitive configuration values. If you need to store sensitive data, you should be using [Roblox's secrets management](https://create.roblox.com/docs/cloud-services/secrets) instead.

This repository includes tooling to help facilitate professional development practices, such as commit linting, commit hooks, and continuous integration. Notably, we do not include any continuous deployment tooling or testing frameworks, as these are highly dependent on your specific project requirements and workflow.

## Features

- [rbxts](https://roblox-ts.com/)
- [Flamework](https://flamework.fireboltofdeath.dev/)
- [@rbxts/lyra](https://www.npmjs.com/package/@rbxts/lyra)
- [@rbxts/charm](https://www.npmjs.com/package/@rbxts/charm)
- [@rbxts/react](https://www.npmjs.com/package/@rbxts/react)
- [@rbxts/ui-labs](https://www.npmjs.com/package/@rbxts/ui-labs)
- [Rokit](https://github.com/rojo-rbx/rokit)
- [Biome](https://biomejs.dev/)
- [Lefthook](https://lefthook.dev/)
- [Commitlint](https://commitlint.js.org/)
- [GitHub Actions](https://github.com/features/actions)

## Credits

- Thanks to [@wad4444](https://github.com/wad4444) for his Biome configuration.
- Thanks to [@littensy](https://github.com/littensy) for various utilities and reference repositories.
- All the maintainers of the various open-source packages included in this repository.

## License

Released under the [MIT](./LICENSE) License.
