function CustomButton({ text, onPress, btnStyle, txtStyle, component, disable }) {
  return (
    <TouchableOpacity onPress={onPress} disabled={disable ? true : false} style={{ opacity: disable ? .3 : 1, }}>
      <View style={{ ...btnStyle ? { ...btnStyle } : {} }}>
        {component ? component :
          <Text adjustsFontSizeToFit style={txtStyle ? txtStyle : {}}>{text ? text : ''}</Text>}
      </View>
    </TouchableOpacity>
  );
}


const BackButton = (onPress) => {
  return (
    <CustomButton
      onPress={onPress.onPress}
      component={
        <Image
          style={{ height: 35, width: 35 }}
          source={require('../New/AG/images/back-button.png')}>
        </Image>
      }
    />
  );
}

export default BackButton;
export { CustomButton };