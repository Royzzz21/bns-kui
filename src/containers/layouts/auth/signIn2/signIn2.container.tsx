import React from 'react';
import { NavigationScreenProps } from 'react-navigation';
import { SignInForm2Data } from '@src/components/auth';
import { SignIn2 } from './signIn2.component';

export class SignIn2Container extends React.Component<NavigationScreenProps> {

  private navigationKey: string = 'SignIn2Container';

  private onSignInPress = (data: SignInForm2Data) => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  private onSignUpPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Sign Up 2',
    });
  };

  private onForgotPasswordPress = () => {
    this.props.navigation.navigate({
      key: this.navigationKey,
      routeName: 'Forgot Password',
    });
  };

  public render(): React.ReactNode {
    return (
      <SignIn2
        onSignInPress={this.onSignInPress}
        onSignUpPress={this.onSignUpPress}
        onForgotPasswordPress={this.onForgotPasswordPress}
      />
    );
  }
}
