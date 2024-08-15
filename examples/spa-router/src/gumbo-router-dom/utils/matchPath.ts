interface Match {
    params: { [key: string]: string };
    path: string;
    isExact: boolean;
  }
  
  export const matchPath = (pathname: string, path: string): Match | null => {
    const keys: string[] = [];
    const pattern = path
      .replace(/\/:([^/]+)/g, (_, key) => {
        keys.push(key);
        return '/([^/]+)';
      })
      .replace(/\//g, '\\/');
  
    const regex = new RegExp(`^${pattern}$`);
    const match = pathname.match(regex);
  
    if (!match) return null;
  
    const [url, ...values] = match;
    const isExact = pathname === url;
    const params = keys.reduce<{ [key: string]: string }>((acc, key, index) => {
      acc[key] = values[index];
      return acc;
    }, {});
  
    return { path, params, isExact };
  };
  