export default function({  $auth, redirect  }) {
    // check loggedIn "false"
    if (!$auth.loggedIn) {
        
        return redirect('/customer/login')
    }
    
    // check admin role
    if ($auth.strategy.name != "customer") {
        
        return redirect('/customer/login')
    } else {
        return
    }
}