const content = [
  {
    tab: "Section 1",
    content: "I'm content of the Section 1",
  },
  {
    tab: "Section 2",
    content: "I'm content of the Section 2",
  },
];

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }

  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentIndex,
  };
};
