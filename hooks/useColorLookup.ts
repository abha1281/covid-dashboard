const useColorLookup = () => {
  const getHexTransparency = (hexColor: string, percentage = 100) => {
    var hex = hexColor.substring(0, 7);
    var transparency = Math.round((percentage / 100) * 255).toString(16);

    return hex + transparency;
  };

  return { getHexTransparency };
};

export default useColorLookup;
