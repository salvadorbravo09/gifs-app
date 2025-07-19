import { Gif } from '../interfaces/gif.interface';
import { GiphyItem } from '../interfaces/giphy.interfaces';

/**
 * Clase utilitaria para transformar datos de la API de Giphy
 * a la estructura interna de la aplicacion
 */
export class GifMapper {
  // Convierte un elemento de Giphy a nuestro formato Gif
  static mapGiphyItemToGif(item: GiphyItem): Gif {
    return {
      id: item.id,
      title: item.title,
      url: item.images.original.url,
    };
  }

  // Convierte un array de elementos de Giphy a un array de Gifs
  static mapGiphyItemsToGifArray(items: GiphyItem[]): Gif[] {
    // Aplica la transformacionm a cada elemento del array
    return items.map(this.mapGiphyItemToGif);
  }
}
