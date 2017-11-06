Program ExpCosSin;
Uses Crt;
Const 
  /// Константа точности
  eps = 0.000001;

Type 
///- complex(Re, Im)
/// Комплексное число типа (Re + i * Im)
  complex = record
      Re, Im: real;
  end;

/// Происводит ввод комплексного числа z в строку с координатами (x, y)
Procedure ReadC( x, y: integer; Var z: complex);
begin
  GoToXY(20, 20); Write('Enter the z.Re: '); Readln(z.Re);
  GoToXY(x, y); Writeln('z = (', z.Re:6:2, ', ');
  GoToXY(20, 20); Write('                              ');
  
  GoToXY(20, 20); Write('Enter the z.Im: '); Readln(z.Im);
  GoToXY(x + 12, y); Writeln(z.Im:6:2, ')');
  GoToXY(20, 20); Write('                              ');
end;
/// Выводит комплексное число z на экран в строку с координатами (x, y)
Procedure WriteC(x, y: integer; z: complex);
begin
  GoToXY(x, y);
  Writeln('(', z.Re:6:2, ', ', z.Im:6:2, ')');
  GoToXY(20, 20);
end;
/// Инвертирует комплексное число z
Procedure Inv(z: complex; var w: complex);
Var znam: real;
begin
  znam := sqr(z.Re) + sqr(z.Im);
  w.Re := z.Re / znam;
  w.Im := -z.Im / znam;
end;
Procedure Code(z: complex; var w: complex);
begin
  w.Re := z.Re;
  w.Im := -z.Im;
end;
/// Возвращает комплексный ноль (0, 0)
Function Zero(): complex;
Var w: complex;
begin
  w.Re:= 0;
  w.Im:= 0;
  Zero:= w;
end;
/// Возвращает комплексную единицу (1, 0)
Function One(): complex;
Var w: complex;
begin
  w.Re:= 1;
  w.Im:= 0;
  One:= w;
end;
/// Возвращает результат сложения двух комплексных чисел u и v
Function Add(u, v: complex): complex;
Var w: complex;
begin
  w.Re := u.Re + v.Re;
  w.Im := u.Im + v.Im;
  Add := w;
end;
/// Возвращает результат вычитания двух комплексных чисел u и v
Function Sub(u, v: complex): complex;
Var w: complex;
begin
  w.Re := u.Re - v.Re;
  w.Im := u.Im - v.Im;
  Sub := w;
end;
/// Возвращает результат произведения двух комплексных чисел u и v
Function Mult(u, v: complex): complex;
Var w: complex;
begin
  w.Re := u.Re * v.Re - u.Im * v.Im;
  w.Im := u.Re * v.Im + u.Im * v.Re;
  Mult := w;
end;
/// Возвращает результат произведение вещественного числа a и комплексного числа z
Function Prod(a: real; z: complex): complex;
Var w: complex;
begin
  w.Re := a * z.Re;
  w.Im := a * z.Im;
  Prod := w;
end;
/// Возвращает результат деления двух комплексных чисел u и v
Function Division(u, v: complex): complex;
Var z: complex;
begin
  z.Re:= (u.Re * v.Re + u.Im * v.Im) / (sqr(v.Im) + sqr(v.Re));
  z.Im:= (u.Im * v.Re - u.Re * v.Im) / (sqr(v.Im) + sqr(v.Re));
  Division:= z;
end;
/// Возвращает модуль комплексного числа z
Function Modul(z: complex): real;
begin
  Modul := sqrt(sqr(z.Re) + sqr(z.Im));
end;
/// Возвращает результат возведения комплексного числа z в степень degree
Function Pow(z: complex; degree: integer): complex;
Var i: integer;
    a: complex;
begin
  a := z;
  for i := 2 to degree do a := Mult(a, z);
  Pow := a;
end;
/// Возвращает экспоненту комплексного числа z
Function ExpC(z: complex): complex;
Var k: integer;
    P, S: complex;
begin
  k:= 0; P:= One(); S:= One();
  while Modul(P) >= eps do
  begin
    k:= k + 1;
    P:= Mult(P, z);
    P:= Prod(1/k, P);
    S:= Add(S, P);
  end;
  ExpC:= S;
end;
/// Возвращает косинус комплексного числа z
Function CosC(z: complex): complex;
Var k: integer;
    z2, P, S: complex;
begin
  z2:= Pow(z, 2);
  k:= 0; P:= One(); S:= One();
  while Modul(P) >= eps do
  begin
    k:= k + 2;
    P:= Mult(P, z2);
    P:= Prod(1/k/(k-1), P);
    S:= Add(S, P);
  end;
  CosC:= S;
end;
/// Возвращает синус комплексного числа z
Function SinC(z: complex): complex;
Var k: integer;
    z2, P, S: complex;
begin
  z2:= Pow(z, 2);
  k:= 1; P:= z; S:= z;
  while Modul(P) >= eps do
  begin
    k:= k + 2;
    P:= Mult(P, z2);
    P:= Prod(1/k/(k-1), P);
    S:= Add(S, P);
  end;
  SinC:= S;
end;

Var z: complex;

Begin
  ReadC(2, 2, z);
  WriteC(2, 4, ExpC(z));
  WriteC(2, 6, CosC(z));
  WriteC(2, 8, SinC(z));
End.