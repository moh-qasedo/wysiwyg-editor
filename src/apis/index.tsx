let content = `{"blocks":[{"key":"bi5rr","text":"This an initial dummy styled and formated text in code","type":"unstyled","depth":0,"inlineStyleRanges":[{"offset":22,"length":6,"style":"BOLD"},{"offset":33,"length":8,"style":"BOLD"},{"offset":33,"length":8,"style":"UNDERLINE"},{"offset":33,"length":8,"style":"ITALIC"},{"offset":50,"length":4,"style":"CODE"}],"entityRanges":[],"data":{}}],"entityMap":{}}`;

export const getContent = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(content);
    }, 300);
  });

export const editContent = (newContent: string) =>
  new Promise((resolve) => {
    setTimeout(() => {
      content = newContent;
      resolve(true);
    }, 300);
  });
