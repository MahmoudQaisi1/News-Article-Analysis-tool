//This function will check if a URL is valid

export function isValidUrl(string) {
  try {
    const url = new URL(string);

    // Check if the protocol is valid (http, https, ftp)
    const validProtocols = ['http:', 'https:', 'ftp:'];
    if (!validProtocols.includes(url.protocol)) {
      return false;
    }

    return true; // Passed all checks
  } catch (error) {
    return false;
  }
}
