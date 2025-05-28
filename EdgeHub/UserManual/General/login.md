---
sidebar_position: 2
sidebar_label: 'Login to Dashboard'
hide_title: true
pagination_label: Login to Dashboard
title: 'Login to Dashboard'
description: ''
---
EdgeHub supports users to directly login to Dashboard or a custom website through EdgeHub portal. A user with Tenant Admin permissions can access their own tenant and edit the users within that tenant. The detailed configuration steps are as follows:

1. A user with Tenant Admin permissions enters their own tenant and goes to `User management`.
   ![login-dashboard-01-user-management-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122478519224342.png)

2. Edit a Tenant user.
   ![login-dashboard-02-edit-user-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122482244617191.png)

3. In the user settings, find the "Set startup dashboard page" setting. By default, it is set to "Default Homepage," which refers to the Dashboard.
   ![login-dashboard-03-default-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122485713884693.png)

4. Switch the setting to "Open a specific homepage" and enter the URL of the custom website in the Dashboard URL field.
   ![login-dashboard-04-custom-url-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122490119711612.png)

5. Save the user settings.
   ![login-dashboard-05-submit-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122494568204438.png)

6. Log out of the account and go back to the login interface. Select the "Dashboard" tab.
   ![login-dashboard-06-login-page-new.png](https://docs.wise-paas.advantech.com/dataSource/resource/1700122498148558983.png)

7. Enter the username and password, then click "Sign in."
   - If this account has not changed the settings, it will redirect to the Dashboard, and you will see that you have logged in with the same account.
     ![login-dashboard-07-dashboard.png](https://docs.wise-paas.advantech.com/dataSource/resource/1689644628395483032.png)
   - If this account has a specific homepage set, it will redirect to that custom website.
     ![login-dashboard-08-redirect-wikipedia-new.gif](https://docs.wise-paas.advantech.com/dataSource/resource/1700123434365482436.gif)