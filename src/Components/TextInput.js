import * as React from 'react';
import { TextInput } from 'react-native-paper';
// import { colors } from '../Colors';
import { StyleSheet } from "react-native";
import { windowHeight } from '../Contants/Constants';

export const CustomTextInput = React.forwardRef((props, ref) => {

    return (

        <TextInput
            {...props}
            ref={ref}
            // autoCapitalize='none'
            style={[TextInputStyle.TextInput, { marginBottom: 10, backgroundColor: "#fff" }]}
            theme={{
                 backgroundColor: "#fff", 
                 
            }}
            // mode='outline'
            mode='outlined'
            // activeUnderlineColor={colors.PrimaryColor}
            // underlineColor={colors.TextInputUnderlineColor}
            outlineColor={"#D0D3D9"}
            // activeOutlineColor={colors.PrimaryColor}
        />
    );
});

const TextInputStyle = StyleSheet.create({
  TextInput: {
    fontSize: 14,
    maxHeight:windowHeight/4
    // backgroundColor:"#fff"
  },
  Theme: {
    roundness: 12, backgroundColor: "#fff", colors: {
      background: "#fff"
    },
  }
})