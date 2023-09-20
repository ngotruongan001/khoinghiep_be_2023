const router = require("express").Router();
const tokenNotifyCtrl = require("../controllers/tokenNotifyCtrl");

router.get("/token-notify", tokenNotifyCtrl.getToken);
router.get("/token-notify/:token", tokenNotifyCtrl.getTokenByIdUser);
router.post("/token-notify", tokenNotifyCtrl.createTokenNotify);
router.put("/update-token-notify/:token", tokenNotifyCtrl.updateTokenNotify);

// router.delete("/token-notify/:userId", tokenNotifyCtrl.removeTokenNotify);
router.delete("/token-all-notify", tokenNotifyCtrl.removeAllTokenNotify);

module.exports = router;
