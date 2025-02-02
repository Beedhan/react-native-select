import type { ViewStyle, ColorValue, TextStyle } from 'react-native';

export type DropdownProps = {
  placeholder?: string;
  label?: string;
  error?: string;
  helperText?: string;
  options: any[];
  optionLabel: string;
  optionValue: string;
  onValueChange: Function;
  selectedValue?: string | any[] | null;
  isMultiple?: boolean;
  isSearchable?: boolean;
  labelStyle?: TextStyle;
  dropdownStyle?: ViewStyle;
  dropdownContainerStyle?: ViewStyle;
  dropdownErrorStyle?: ViewStyle;
  dropdownErrorTextStyle?: TextStyle;
  dropdownHelperTextStyle?: TextStyle;
  selectedItemStyle?: ViewStyle;
  multipleSelectedItemStyle?: ViewStyle;
  modalBackgroundStyle?: ViewStyle;
  modalOptionsContainer?: ViewStyle;
  searchInputStyle?: ViewStyle;
  primaryColor?: ColorValue;
  disabled?: boolean;
  checkboxSize?: number;
  checkboxStyle?: ViewStyle;
  checkboxLabelStyle?: TextStyle;
  placeholderStyle?:TextStyle;
};
