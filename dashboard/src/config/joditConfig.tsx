export const joditConfig = {
  readonly: false,
  height: '500px',
  uploader: {
    url: `${import.meta.env.VITE_API_URL || 'https://widm.csie.ncu.edu.tw'}/image`,  // 使用環境變數
    filesVariableName: () => 'file',
    withCredentials: false,
    pathVariableName: 'path',
    format: 'json',
    method: 'POST',
  },
  filebrowser: {
    ajax: {
      url: `${import.meta.env.VITE_API_URL || 'https://widm.csie.ncu.edu.tw'}/image`,  // 使用環境變數
      method: 'GET',
    },
    permissions: {
      create: true,
      remove: true,
      rename: true,
      download: true,
    },
    fileRemove: {
      url: `${import.meta.env.VITE_API_URL || 'https://widm.csie.ncu.edu.tw'}/image`,  // 使用環境變數
      method: 'DELETE',
      contentType: 'application/json',
    },
  },
  removeButtons: ['file', 'video'],
  style: {
    font: [
      'Arial',
      'Georgia',
      'Impact',
      'Verdana',
      'Roboto',
      'Open Sans',
      'Lato',
      'Montserrat',
      'Oswald',
      'Raleway',
      'Poppins',
      'Merriweather',
      'Ubuntu',
      'Nunito',
      'Rubik',
      'Playfair Display',
      'Quicksand',
      'Source Sans Pro',
      'PT Sans',
      'Josefin Sans',
      'Fira Sans',
      'Libre Baskerville',
      'Inconsolata',
      'Arvo',
      'Cabin',
      'Exo',
      'Dosis',
      'Anton',
      'Signika',
      'Work Sans',
      'Zilla Slab',
      'Alegreya',
      'Amatic SC',
      'Bad Script',
      'Baloo',
      'Bitter',
      'Caveat',
      'Comfortaa',
      'Cormorant Garamond',
      'Crimson Text',
      'Damion',
      'Domine',
      'EB Garamond',
      'Fjalla One',
      'Fredericka the Great',
      'Gudea',
      'Inknut Antiqua',
      'Julius Sans One',
      'Karla',
      'Libre Franklin',
      'Literata',
      'Noto Sans TC',
      'Noto Serif TC',
      'Noto Sans SC',
      'Noto Serif SC',
      'Noto Sans JP',
      'Noto Serif JP',
      'ZCOOL KuaiLe',
      'ZCOOL XiaoWei',
      'ZCOOL QingKe HuangYou',
      'Ma Shan Zheng',
      'Long Cang',
      'Zhi Mang Xing',
      'Fang Zheng Hei Ti Shao Nv',
      'Fang Zheng Kai Ti',
      'Fang Zheng Xing Kai Jian',
      'Fang Zheng Xing Shu',
      'Fang Zheng Fang Song',
      'Fang Zheng Zong Yi Shu',
      'Fang Zheng Hei Ti Shu',
      'Fang Zheng Hei Ti Tai Wan'
    ]
  },
  controls: {
    font: {
      list: {
        'Arial': 'Arial',
        'Georgia': 'Georgia',
        'Impact': 'Impact',
        'Verdana': 'Verdana',
        'Roboto': 'Roboto',
        'Open Sans': 'Open Sans',
        'Lato': 'Lato',
        'Montserrat': 'Montserrat',
        'Oswald': 'Oswald',
        'Raleway': 'Raleway',
        'Poppins': 'Poppins',
        'Merriweather': 'Merriweather',
        'Ubuntu': 'Ubuntu',
        'Nunito': 'Nunito',
        'Rubik': 'Rubik',
        'Playfair Display': 'Playfair Display',
        'Quicksand': 'Quicksand',
        'Source Sans Pro': 'Source Sans Pro',
        'PT Sans': 'PT Sans',
        'Josefin Sans': 'Josefin Sans',
        'Fira Sans': 'Fira Sans',
        'Libre Baskerville': 'Libre Baskerville',
        'Inconsolata': 'Inconsolata',
        'Arvo': 'Arvo',
        'Cabin': 'Cabin',
        'Exo': 'Exo',
        'Dosis': 'Dosis',
        'Anton': 'Anton',
        'Signika': 'Signika',
        'Work Sans': 'Work Sans',
        'Zilla Slab': 'Zilla Slab',
        'Alegreya': 'Alegreya',
        'Amatic SC': 'Amatic SC',
        'Bad Script': 'Bad Script',
        'Baloo': 'Baloo',
        'Bitter': 'Bitter',
        'Caveat': 'Caveat',
        'Comfortaa': 'Comfortaa',
        'Cormorant Garamond': 'Cormorant Garamond',
        'Crimson Text': 'Crimson Text',
        'Damion': 'Damion',
        'Domine': 'Domine',
        'EB Garamond': 'EB Garamond',
        'Fjalla One': 'Fjalla One',
        'Fredericka the Great': 'Fredericka the Great',
        'Gudea': 'Gudea',
        'Inknut Antiqua': 'Inknut Antiqua',
        'Julius Sans One': 'Julius Sans One',
        'Karla': 'Karla',
        'Libre Franklin': 'Libre Franklin',
        'Literata': 'Literata',
        'Noto Sans TC': 'Noto Sans TC',
        'Noto Serif TC': 'Noto Serif TC',
        'Noto Sans SC': 'Noto Sans SC',
        'Noto Serif SC': 'Noto Serif SC',
        'Noto Sans JP': 'Noto Sans JP',
        'Noto Serif JP': 'Noto Serif JP',
        'ZCOOL KuaiLe': 'ZCOOL KuaiLe',
        'ZCOOL XiaoWei': 'ZCOOL XiaoWei',
        'ZCOOL QingKe HuangYou': 'ZCOOL QingKe HuangYou',
        'Ma Shan Zheng': 'Ma Shan Zheng',
        'Long Cang': 'Long Cang',
        'Zhi Mang Xing': 'Zhi Mang Xing',
        'Fang Zheng Hei Ti Shao Nv': 'Fang Zheng Hei Ti Shao Nv',
        'Fang Zheng Kai Ti': 'Fang Zheng Kai Ti',
        'Fang Zheng Xing Kai Jian': 'Fang Zheng Xing Kai Jian',
        'Fang Zheng Xing Shu': 'Fang Zheng Xing Shu',
        'Fang Zheng Fang Song': 'Fang Zheng Fang Song',
        'Fang Zheng Zong Yi Shu': 'Fang Zheng Zong Yi Shu',
        'Fang Zheng Hei Ti Shu': 'Fang Zheng Hei Ti Shu',
        'Fang Zheng Hei Ti Tai Wan': 'Fang Zheng Hei Ti Tai Wan'
      }
    }
  }
};
