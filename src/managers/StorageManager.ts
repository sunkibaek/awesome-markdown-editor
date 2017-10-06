class StorageManager {
  public static KEYS = {
    texts: "@AwesomeMarkdown:texts"
  };

  private key: string;

  constructor(key: string) {
    this.key = key;
  }

  public load = (): string | null => {
    return localStorage.getItem(this.key);
  };

  public save = (data: string): void => {
    localStorage.setItem(this.key, data);
  };
}

export default StorageManager;
