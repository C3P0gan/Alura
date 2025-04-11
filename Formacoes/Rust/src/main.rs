const PI: f32 = 3.1415; // Compile-time constant; requires type annotation.
static mut GLOBAL_VAR: u8 = 1; // Can be mutable, though unsafe; represents a location in memory.

fn sum(a: i32, b: i32) -> i32 {
    println!("{} + {} = {}", a, b, a + b); // ; supresses the value of the expression.
    a + b
}

fn shadow() {
    let a: i16 = 123;

    {
        let b: i16 = 456;
        println!("b = {}", b);

        let a: i16 = 777; // Exists only inside this scope;
        println!("inside, a = {}", a);
    }

    println!("outside, a = {}", a);
}

fn scope() {
    println!("PI = {}", PI);

    unsafe {
        println!("GLOBAL_VAR = {}", GLOBAL_VAR);
    }

    let variable: i16 = 300;
    println!(
        "variable = {}, size = {}",
        variable,
        std::mem::size_of_val(&variable)
    );

    let variable: i16 = 301; // Variables despite immutable, can be redeclared.
    println!(
        "variable = {}, size = {}",
        variable,
        std::mem::size_of_val(&variable)
    );

    let decimal: f32 = 2.5;
    println!(
        "decimal = {}, size = {}",
        decimal,
        std::mem::size_of_val(&decimal)
    );

    let boolean: bool = false;
    println!(
        "boolean = {}, size = {}",
        boolean,
        std::mem::size_of_val(&boolean)
    );

    let letter: char = 'C';
    println!(
        "letter = {}, size = {}",
        letter,
        std::mem::size_of_val(&letter)
    );
}

fn conditional() {
    let age: u8 = 17;
    let auth: bool = true;
    let of_age: bool = age >= 18;

    if of_age {
        println!("You shall pass!");
    } else if age >= 16 && auth {
        println!("You shall pass with the authorization!");
    } else {
        println!("You shall not pass!");
    }

    let condition: &'static str = if of_age { "maior" } else { "menor" };
    println!("É {} de idade.", condition);

    let language: &'static str = "Python";
    let purpose: &'static str = match language {
        "PHP" => "Web",
        "Kotlin" => "Android",
        "Python" => "Data Science",
        _ => "Unknown",
    };

    println!("The purpose of {} is {}.", language, purpose);
}

fn repetitions() {
    let multiplier: u8 = 5;

    let mut count: u8 = 0;
    while count < 10 {
        count += 1;

        if count == 5 {
            continue;
        }

        println!("{} x {} = {}", multiplier, count, multiplier * count);
    }

    count = 0;
    loop {
        count += 1;
        println!("{} x {} = {}", multiplier, count, multiplier * count);

        if count == 10 {
            break;
        }
    }

    // for i in 1..=10 { ... };
    for i in 1..11 {
        println!("{} x {} = {}", multiplier, i, multiplier * i);
    }
}

fn ownership() {
    // let string = String::from("Cristoffer"); // Dinamically allocated on the HEAP.
    let mut string = String::from("Cristoffer"); // Mutable string.
                                                 // steal(string); // Moves ownership of the variable.
                                                 // steal(&string); // Passing the reference only lends the ownership.
    steal(&mut string); // Passes mutable reference, lends ownership.

    println!("{}", string);
}

// fn steal(string: String) { ... } // 'Steals'ownership.
// fn steal(string: &String) { ... } // Borrows ownership.
fn steal(string: &mut String) {
    // As the variable is received, this function 'steals' the ownership.
    // Once a reference loses its scope, its liberated from the HEAP.
    string.push_str(" Pogan"); // Since it's receiving a mutable reference, we are able to change
                               // its value.
    println!("{}", string);
}

fn pattern_matching() {
    for x in 1..=20 {
        println!(
            "{}: {}",
            x,
            match x {
                1 => "Little",
                2 | 3 => "A little",
                4..=10 => "A bunch",
                _ if x % 2 == 0 => "A good amount",
                _ => "A lot",
            }
        );
    }
}

fn errors() {
    // panic!("Error"); // Similar to 'raise' in Python
    match result() {
        Ok(s) => println!("Success string = {}", s),
        Err(n) => println!("Error code = {}", n),
    }
}

fn result() -> Result<String, u8> {
    // Ok(String::from("All is fine!"))
    Err(42)
}

fn main() {
    scope();
    shadow();
    println!("sum = {}", sum(2, 2));
    conditional();
    repetitions();
    ownership();
    pattern_matching();
    errors();
}
