let a = 290, b = 220, c = 280, d = 270;
if (a > b) {
    if (a > c) {
        if (a > d) {
            document.write("\n a is max" + a);
        } else {
            document.write("\n d is max" + d);
        }
    } else {
        if (c > d) {
            document.write("\n c is max" + c);
        } else {
            document.write("\n d is max" + d);
        }
    }
} else {
    if (b > c) {
        if (b > d) {
            document.write("\n b is max" + b);
        } else {
            document.write("\n d is max" + d);
        }
    } else {
        if (c > d) {
            document.write("\n c is max" + c);
        } else {
            document.write("\n d is max" + d);
        }
    }
}


// take 1,2,3,4 for +,-,*,/ 
// document.write("<pre>1.add<br>2.sub<br>3.multi<br>4.div")
// let int = prompt("enter your choice");
// let int1 = parseInt(int);
// switch (int1) {
//     case 1:
//         e = a + b;
//         document.write("\n addition is :" + e);
//         break;
//     case 2:
//         e = a - b;
//         document.write("\n substraction is :" + e);
//         break;

//     case 3:
//         e = a * b;
//         document.write("\n multiply is :" + e);
//         break;
//     case 4:
//         e = a / b;
//         document.write("\n division is :" + e);
//         break;
//     default:
//         document.write("\n choice is not valid");
// }

// let ch = prompt("enter day's first two later");

// switch (ch) {
//     case 'su':
//         document.write("\n Sunday");
//         break;
//     case 'mo':
//         document.write("\n Monday");
//         break;
//     case 'tu':
//         document.write("\n Tuesday");
//         break;
//     case 'we':
//         document.write("\n wednesday");
//         break;
//     case 'th':
//         document.write("\n thursday");
//         break;
//     case 'fr':
//         document.write("\n FRIday");
//         break;
//     case 'sa':
//         document.write("\n Saturday");
//         break;
//     default :
//     document.write("\n not valid");
// }
// let ch = prompt("enter your choice");
// switch (ch) {
//        case '+':
//            e = a + b;
//            document.write("\n addition is :" + e);
//            break;
//        case '-':
//            e = a - b;
//            document.write("\n substraction is :" + e);
//            break;
//            case '*':
//            e = a * b;
//            document.write("\n multiply is :" + e);
//            break;
//        case '/':
//            e = a / b;
//            document.write("\n division is :" + e);
//            break;
//        default:
//            document.write("\n choice is not valid");
// }