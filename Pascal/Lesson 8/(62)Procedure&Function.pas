Program ProcedureAndFunction;

Type 
  complex = record
      Re, Im: real;
  end;

Procedure Add(u, v: complex; var w: complex);
begin
  w.Re := u.Re + v.Re;
  w.Im := u.Im + v.Im;
end;
Procedure Mult(u, v: complex; var w: complex);
begin
  w.Re := u.Re * v.Re - u.Im * v.Im;
  w.Im := u.Re * v.Im + u.Im * v.Re;
end;
Procedure Inv(z: complex; var w: complex);
Var znam: real;
begin
  znam := sqr(z.Re) + sqr(z.Im);
  w.Re := z.Re / znam;
  w.Im := -z.Im / znam;
end;
Procedure Division(u, v: complex; var w: complex);
Var z: complex;
begin
  Inv(u, z);
  Mult(u, z, w);
end;
Procedure Prod(a: real; z: complex; var w:complex);
begin
  w.Re := a + z.Re;
  w.Im := a + z.Im;
end;
Procedure Copy(z: complex; var w: complex);
begin
  w.Re := z.Re;
  w.Im := z.Im;
end;

Function Modul(z: complex): real;
begin
  Modul := sqrt(sqr(z.Re) + sqr(z.Im));
end;
Function Pow(z: complex; degree: integer): real;
Var i: integer;
    a: complex;
begin
  Copy(z, a);
  for i := 1 to degree do 
  begin
    a.Re := a.Re * z.Re;
    a.Im := a.Im * z.Im;
  end;
  Pow := a.Re + a.Im;
end;

Var z: complex;
    w: real;

Begin
  Readln(z.Re, z.Im);
  w := Pow(z, 5) + 3 * Pow(z, 2) - Pow(z, 1);
  Writeln(w);
End.