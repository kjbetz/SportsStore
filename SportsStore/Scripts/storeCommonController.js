var authenticateUrl = "/authenticate"

var authenticate = function (succcessCallback) {
    sendRequest(authenticateUrl, "POST", {
        "grant_type": "password", username: model.username(), password: model.password()
    }, function (data) {
        model.authenticated(true);
        setAjaxHeaders({
            Authorization: "bearer " + data.access_token
        });
        if (succcessCallback) {
            succcessCallback();
        }
    });
};