import React from 'react';
import { useScreens } from 'react-native-screens';
import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  NavigationContainer,
  NavigationRouteConfigMap,
} from 'react-navigation';
import {
  ComponentsContainer,
  LayoutsContainer,
  MenuContainer,
  ThemesContainer,
} from '@src/containers/menu';
import {
  AuthContainer,
  ForgotPasswordContainer,
  SignIn1Container,
  SignIn2Container,
  SignIn3Container,
  SignIn4Container,
  SignIn5Container,
  SignUp1Container,
  SignUp2Container,
  SignUp3Container,
  SignUp4Container,
} from '@src/containers/layouts/auth';
import {
  DashboardsContainer,
  Trainings1Container,
  Trainings2Container,
} from '@src/containers/layouts/dashboards';
import {
  AddNewCardContainer,
  BookDetailsContainer,
  EcommerceContainer,
  MovieDetailsContainer,
  PaymentContainer,
  ProductDetailsContainer,
  ProductsListContainer,
  RentApartmentContainer,
  ShoppingCartContainer,
} from '@src/containers/layouts/ecommerce';
import {
  MessagingContainer,
} from '@src/containers/layouts/messaging';
import {
  AvatarContainer,
  BottomNavigationContainer,
  ButtonContainer,
  ButtonGroupContainer,
  CheckBoxContainer,
  InputContainer,
  ListContainer,
  OverflowMenuContainer,
  PopoverContainer,
  RadioContainer,
  TabViewContainer,
  TextContainer,
  ToggleContainer,
  TooltipContainer,
  TopNavigationContainer,
  ModalContainer,
} from '@src/containers/components';
import {
  DashboardNavigationOptions,
  EcommerceNavigationOptions,
  MenuNavigationOptions,
} from './options';

const EcommerceNavigationMap: NavigationRouteConfigMap = {
  ['Add New Card']: {
    screen: AddNewCardContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Payment']: {
    screen: PaymentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Products List']: {
    screen: ProductsListContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Product Details']: {
    screen: ProductDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Shopping Cart']: {
    screen: ShoppingCartContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Rent Apartment']: {
    screen: RentApartmentContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Movie Details']: {
    screen: MovieDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
  ['Book Details']: {
    screen: BookDetailsContainer,
    navigationOptions: EcommerceNavigationOptions,
  },
};

const DarhboardsNavigationMap: NavigationRouteConfigMap = {
  ['Trainings 1']: {
    screen: Trainings1Container,
    navigationOptions: DashboardNavigationOptions,
  },
  ['Trainings 2']: {
    screen: Trainings2Container,
    navigationOptions: DashboardNavigationOptions,
  },
};






const AuthNavigationMap: NavigationRouteConfigMap = {
  ['Sign In 1']: SignIn1Container,
  ['Sign In 2']: SignIn2Container,
  ['Sign In 3']: SignIn3Container,
  ['Sign In 4']: SignIn4Container,
  ['Sign In 5']: SignIn5Container,
  ['Sign Up 1']: SignUp1Container,
  ['Sign Up 2']: SignUp2Container,
  ['Sign Up 3']: SignUp3Container,
  ['Sign Up 4']: SignUp4Container,
  ['Forgot Password']: ForgotPasswordContainer,
};

const ThemesNavigator: NavigationContainer = createStackNavigator(
  {
    ['Themes']: ThemesContainer,
  }, {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const ComponentsNavigator: NavigationContainer = createStackNavigator(
  {
    ['Components']: ComponentsContainer,
    ['Button']: ButtonContainer,
    ['Button Group']: ButtonGroupContainer,
    ['CheckBox']: CheckBoxContainer,
    ['Toggle']: ToggleContainer,
    ['Radio']: RadioContainer,
    ['Input']: InputContainer,
    ['Text']: TextContainer,
    ['Avatar']: AvatarContainer,
    ['Tab View']: TabViewContainer,
    ['Popover']: PopoverContainer,
    ['Tooltip']: TooltipContainer,
    ['Overflow Menu']: OverflowMenuContainer,
    ['List']: ListContainer,
    ['Top Navigation']: TopNavigationContainer,
    ['Bottom Navigation']: BottomNavigationContainer,
    ['Modal']: ModalContainer,
  },
  {
    defaultNavigationOptions: MenuNavigationOptions,
  },
);

const LayoutsNavigator: NavigationContainer = createStackNavigator(
  {
    SignIn2Container,
  },
  {
    headerMode: 'none',
  }
);

const MenuNavigator: NavigationContainer = createBottomTabNavigator({
  ['Layouts']: LayoutsNavigator,
  ['Components']: ComponentsNavigator,
  ['Themes']: ThemesNavigator,
}, {
  tabBarComponent: MenuContainer,
  
});

const AppNavigator: NavigationContainer = createStackNavigator({
  ['Home']: MenuNavigator,
  ...AuthNavigationMap,
  ...DarhboardsNavigationMap,
  ...EcommerceNavigationMap,
}, {
  headerMode: 'screen',
  defaultNavigationOptions: {
    header: null,
  },
});

const createAppRouter = (container: NavigationContainer): NavigationContainer => {
  useScreens();
  return createAppContainer(container);
};


export const Router: NavigationContainer = createAppRouter(AppNavigator);
