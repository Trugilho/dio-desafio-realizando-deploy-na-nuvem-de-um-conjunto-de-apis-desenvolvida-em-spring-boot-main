using System;
using RPGUnimedBH.src.Entities;

namespace RPGUnimedBH
{
    class Program
    {
        static void Main(string[] args)
        {
            Knight arus = new Knight("Arus", 23, "Knight");
            Wizard raven = new Wizard("Raven", 99, "Demon");
            Ninja crow = new Ninja("Crow", 35, "Ninja");

            Console.WriteLine(raven.Attack(3));
            Console.WriteLine(raven.Attack(8));
            Console.WriteLine(crow.Attack());

        }
    }
}
