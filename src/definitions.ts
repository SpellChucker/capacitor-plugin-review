declare module '@capacitor/core' {
  interface PluginRegistry {
    Review: ReviewPlugin;
  }
}

export interface ReviewPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
