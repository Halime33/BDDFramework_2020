$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Login.feature");
formatter.feature({
  "line": 3,
  "name": "Login Facebook Page",
  "description": "",
  "id": "login-facebook-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter \u003cusername\u003e into username text fields on home screen",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter \u003cpassword\u003e into password text fields on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
  "name": "",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 16,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;1"
    },
    {
      "cells": [
        "ilhan@gmail.com",
        "test@123"
      ],
      "line": 17,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;2"
    },
    {
      "cells": [
        "john@gmail.com",
        "abd@123"
      ],
      "line": 18,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;3"
    },
    {
      "cells": [
        "jim@gmail.com",
        "456@wer"
      ],
      "line": 19,
      "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6288406999,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.onHomePage()"
});
formatter.result({
  "duration": 456761768,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter ilhan@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter test@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "ilhan@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 29
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 224282219,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 22
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 121101638,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickButton()"
});
formatter.result({
  "duration": 103926263,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 27745535804,
  "status": "passed"
});
formatter.after({
  "duration": 104910051,
  "status": "passed"
});
formatter.before({
  "duration": 3071545061,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.onHomePage()"
});
formatter.result({
  "duration": 97440752,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter john@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter abd@123 into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "john@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 28
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 153734342,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abd@123",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 101129797,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickButton()"
});
formatter.result({
  "duration": 91223677,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 678126745,
  "status": "passed"
});
formatter.after({
  "duration": 96437404,
  "status": "passed"
});
formatter.before({
  "duration": 3006294232,
  "status": "passed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginPageSD.onHomePage()"
});
formatter.result({
  "duration": 85005327,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Verify invalid login for multiple users",
  "description": "",
  "id": "login-facebook-page;verify-invalid-login-for-multiple-users;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 8,
      "name": "@login"
    },
    {
      "line": 1,
      "name": "@web"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I enter jim@gmail.com into username text fields on home screen",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "I enter 456@wer into password text fields on home screen",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click on login button on home screen",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I verify that I am invalid login page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "jim@gmail.com",
      "offset": 8
    },
    {
      "val": "username",
      "offset": 27
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 231106312,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456@wer",
      "offset": 8
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "LoginPageSD.enterDataUserandPassField(String,String)"
});
formatter.result({
  "duration": 89138693,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.clickButton()"
});
formatter.result({
  "duration": 91840719,
  "status": "passed"
});
formatter.match({
  "location": "LoginPageSD.verifyInvalidLogin()"
});
formatter.result({
  "duration": 1149226738,
  "status": "passed"
});
formatter.after({
  "duration": 94683102,
  "status": "passed"
});
});