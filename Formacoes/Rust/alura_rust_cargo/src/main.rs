#[allow(dead_code)]
enum Weekday {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
}

fn is_weekend(weekday: Weekday) -> bool {
    match weekday {
        Weekday::Sunday | Weekday::Saturday => true,
        _ => false,
    }
}

fn array() {
    // let grades: [f32; 4] = [10.0, 8.0, 9.5, 6.0];
    let grades: [f32; 4] = [6.5; 4];
    let integer: usize = 0; // Depends on the OS (32bits [i32]  or 64bits [i64])

    println!("{}", grades[integer]);

    /* for grade in grades {
        println!("The grade is = {}", grade);
    } */

    for idx in 0..grades.len() {
        println!("The grade {} is = {}", idx + 1, grades[idx]);
    }
}

fn matrix() {
    let matrix: [[f32; 3]; 2] = [[0.0, 1.2, 0.1], [1.3, 0.3, 1.4]];

    for row in matrix {
        for col in row {
            println!("Item = {}", col);
        }
    }
}

#[allow(dead_code)]
enum Color {
    Red,
    Green,
    Blue,
    RgbColor(u8, u8, u8),
    CymkColor {
        cyan: u8,
        magenta: u8,
        yellow: u8,
        black: u8,
    },
}

fn colors() {
    let color: Color = Color::CymkColor {
        cyan: 0,
        magenta: 0,
        yellow: 0,
        black: 0,
    };

    println!(
        "Color = {}",
        match color {
            Color::Red => "Red",
            Color::Green => "Green",
            Color::Blue => "Blue",
            Color::RgbColor(0, 0, 0)
            | Color::CymkColor {
                cyan: _,
                magenta: _,
                yellow: _,
                black: 255,
            } => "Black",
            Color::RgbColor(255, 255, 255) => "White",
            Color::RgbColor(_, _, _) => "Unknown RGB",
            Color::CymkColor {
                cyan: _,
                magenta: _,
                yellow: _,
                black: _,
            } => "Unknown CYMK",
        }
    );
}

fn optional_contents() {
    let file_content = read_file(String::from(""));

    match &file_content {
        Some(value) => println!("{}", value),
        None => println!("File does not exist!"),
    };

    println!("{:?}", &file_content);

    if let Some(value) = file_content {
        println!("Now I'm sure there's a value {}", value);
    }
}

fn read_file(_file_path: String) -> Option<String> {
    Some(String::from("File contents"))
}

fn vectors() {
    // let mut grades: Vec<f32> = Vec::new();
    let mut grades: Vec<f32> = Vec::with_capacity(4);
    // let mut grades: Vec<f32> = vec![10.0, 8.8, 6.5];

    println!("Capacity = {}", grades.capacity());
    println!("{:?}", grades);

    grades.push(10.0);
    grades.push(8.8);
    grades.push(6.5);

    println!("Capacity = {}", grades.capacity());
    println!("{:?}", grades);

    grades.push(5.5);

    println!("Grade 1 = {}", grades[0]);

    println!(
        "Grade 6 = {}",
        match grades.get(7) {
            // Some(&n) => n,
            Some(n) => *n,
            None => 0.0,
        }
    );

    /* while let Some(grade) = grades.pop() {
        println!("Removed value = {}", grade);
    } */

    for grade in &grades {
        println!("Grade = {}", grade);
    }

    println!("{:?}", grades);
}

struct Owner {
    name: String,
    surname: String,
}

struct Account {
    owner: Owner,
    balance: f64,
}

impl Account {
    fn withdraw(&mut self, value: f64) {
        self.balance -= value;
    }
}

fn account() {
    let owner: Owner = Owner{
        name: String::from("Cristoffer"),
        surname: String::from("Pogan"),
    };

    let mut account: Account = Account {
        owner,
        balance: 100.0,
    };

    account.withdraw(50.0);

    println!(
        "Account information: Owner = {} {}, Balance = {}",
        account.owner.name, account.owner.surname, account.balance
    );
}

fn main() {
    array();
    matrix();

    println!("Is weekend? {}", is_weekend(Weekday::Thursday));

    colors();

    optional_contents();

    vectors();

    account();
}
