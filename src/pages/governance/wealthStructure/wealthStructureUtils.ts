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
    const wealthCategoryYPosition = 250;
  
    const wealthItemsYPosition = 400;
    const wealthItemsSpacing = 150;
    const wealthItemsMap = {};
  
    wealthStructure.wealthCategories.forEach((category, index) => {
      const positionX = 500 + (index - (wealthStructure.wealthCategories.length - 1) / 2) * wealthCategorySpacing * 1.1;
  
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
  
      wealthItemsMap[category.id] = { positionX, positionY: wealthItemsYPosition, items: [] };
    });
  
    wealthStructure.wealthItems.forEach((item) => {
      const category = wealthItemsMap[item.source];
      if (category) {
        const itemIndex = category.items.length;
  
        let positionX;
  
        if (category.items.length === 0) {
          positionX = category.positionX - 30;
        } else {
          const isEven = category.items.length % 2 === 0;
          const halfIndex = Math.floor(category.items.length / 2);
          const offset = isEven ? halfIndex * wealthItemsSpacing : (halfIndex + 1) * wealthItemsSpacing;
  
          if (itemIndex <= halfIndex) {
            positionX = category.positionX - offset + itemIndex * wealthItemsSpacing;
          } else {
            positionX = category.positionX + (itemIndex - halfIndex) * wealthItemsSpacing;
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