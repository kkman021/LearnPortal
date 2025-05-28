---
sidebar_position: 1
sidebar_label: 'Two-factor authentication (2FA)'
hide_title: true
pagination_label: Two-factor authentication (2FA)
title: 'Two-factor authentication (2FA)'
description: ''
---

EdgeHub allows users to enable two-factor authentication (2FA) for added security during login. Currently, EdgeHub supports using Google or Microsoft Authenticator tools to obtain verification codes and use them for two-factor authentication during login. The detailed steps are as follows:

1. While logged in, click on the Account icon in the top right corner of the screen, and select "Your account"
   ![2FA-01-Account-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1699932621753394637.png)

2. In the Account settings screen, click on "Go to SSO portal to enable 2FA."
   ![2FA-02-Account-setting-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1699932629810722695.png)

3. You will be redirected to the SSO page. Click on "Double verification" in the middle of the screen.
   ![2FA-03-sso.png](https://docs.wise-paas.advantech.com/dataSource/resource/1689612643935579935.png)

4. In the pop-up dialog, enable the switch for two-factor authentication and use the Google or Microsoft Authenticator app installed on your phone to scan the QR code displayed on the screen.
   ![2FA-04-qrcode.png](https://docs.wise-paas.advantech.com/dataSource/resource/1689612647483640406.png)

5. After scanning the QR code, you will see an account generated on your Google or Microsoft Authenticator app, along with a dynamically changing six-digit code. Any future login actions will require using the app to obtain the dynamic verification code.
   ![2FA-05-ms-authenticator.png](https://docs.wise-paas.advantech.com/dataSource/resource/1689612652267872299.png)

6. Go back to the dialog in step 4, enter the dynamic verification code in the field below, and click "Confirm" to complete the setup.
   ![2FA-06-verify-code.png](https://docs.wise-paas.advantech.com/dataSource/resource/1689612655589248479.png)

7. Once completed, return to the EdgeHub page, log out of your account, and log in again.
   ![2FA-07-login-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1699932635984800611.png)

8. After successfully verifying your account password, you will see the login screen entering the second step. At this point, you need to use Google or Microsoft Authenticator to obtain a new verification code and enter it on this screen. Then click "Confirm" to proceed with the two-factor account verification.
   ![2FA-08-login-with-code-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1699932639454460111.png)

9. Once the verification code is successfully verified, you will be allowed to log in and access the tenant list, where you can continue using the EdgeHub platform.
   ![2FA-09-tenant-list-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1699932642703185593.png)
---