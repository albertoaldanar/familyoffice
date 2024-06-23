export const generateNodesAndEdges = (wealthStructure) => {
  const initialNodes = [];
  const initialEdges = [];

  const rootNode = {
    id: "root",
    position: { x: 500, y: 50 },
    data: { name: wealthStructure.title, role: "root", type: "main" },
    type: "customNode",
  };

  initialNodes.push(rootNode);

  const wealthCategorySpacing = 200;
  const wealthCategoryYPosition = 300;

  const wealthItemsYPosition = 500;
  const wealthItemsSpacing = 150;
  const wealthItemsMap = {};

  wealthStructure.wealthCategories.forEach((category, index) => {
    const positionX =
      500 +
      (index - (wealthStructure.wealthCategories.length - 1) / 2) *
        wealthCategorySpacing *
        1.3;

    const node = {
      id: category.id.toString(),
      position: { x: positionX, y: wealthCategoryYPosition },
      data: {
        name: category.name,
        role: "wealthCategory",
        id: category.id.toString(),
      },
      type: "customNode",
    };

    initialNodes.push(node);

    initialEdges.push({
      id: `e${rootNode.id}-${category.id}`,
      source: rootNode.id,
      target: category.id.toString(),
    });

    wealthItemsMap[category.id] = {
      positionX,
      positionY: wealthItemsYPosition,
      items: [],
    };
  });

  wealthStructure.wealthItems.forEach((item, myIndex) => {
    const category = wealthItemsMap[item.source];
    if (category) {
      const itemIndex = category.items.length;
      let positionX;

      if (category.items.length === 1) {
        positionX = category.positionX;
        console.log('entroo en igual');
      } else {
        const halfIndex = Math.floor((category.items.length + 1) / 2);
        if (category.items.length % 2 === 0) {
          if (myIndex > halfIndex) {
              console.log('entroo menor');
            positionX = category.positionX - (myIndex - halfIndex) * 120;
          } else {
            positionX = category.positionX + (itemIndex - halfIndex + 1) * wealthItemsSpacing;
            console.log('entroo mayoe');
          }
        } else {
          if (myIndex < halfIndex) {
            console.log('entroo en else menor');
            positionX =
              category.positionX - (halfIndex - itemIndex) * wealthItemsSpacing;
          } else {
            console.log('entroo en else mayor');
            positionX =
              category.positionX + (itemIndex - halfIndex) * wealthItemsSpacing;
          }
        }
      }

      const node = {
        id: item.id.toString(),
        position: { x: positionX, y: category.positionY },
        data: {
          name: item.name,
          role: "wealthItem",
          id: item.id.toString(),
          coreId: item.coreId,
          value: item.value,
          source: item.source
        },
        type: "customNode",
      };

      initialNodes.push(node);

      initialEdges.push({
        id: `e${item.source}-${item.id}`,
        source: item.source.toString(),
        target: item.id.toString(),
      });

      category.items.push(node);
    }
  });

  return { initialNodes, initialEdges };
};
