class InvalidCouponCode extends Error{
    constructor(msg){
        super(msg)
        this.name="invalid coupon"
    }
}

function couponCode(num){
    try{
    code=12344;
    if(num!=code){
        throw new InvalidCouponCode("code is invalid")
    }
    else{
        console.log("Valid");
    }}
    catch(err){
        console.log(err.name+":"+err.message);
    }
    

}
couponCode(12344);
couponCode(123);