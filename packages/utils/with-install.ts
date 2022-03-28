export const withInstall = (main: { name: string; template: string, install?: any }, name?: string): any => {
  main.install = (app: any): void => {
    app.component(name ?? main.name, main)
  }
  return main
}
