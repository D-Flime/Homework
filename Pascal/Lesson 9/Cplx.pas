///- Cplx
/// ������ ��� ������ � ������������ �������
Unit Cplx;

Interface
  uses Crt;
  Const 
    /// ��������� ��������
    eps = 0.000001;
    /// ��������� �������
    n = 2;
  Type 
    ///- complex(Re, Im)
    /// ����������� ����� ���� (Re + i * Im)
    complex = record
      Re, Im: real;
    end;
    ///- matrixC(x, y)
    /// ��������� ������ (�������) ����������� �����
    matrixC = array [1..n, 1..n] of complex;
  
  //===== ===== ===== ===== ===== ����������� ����� ===== ===== ===== ===== =====
  
  /// ���������� ���� ������������ ����� z � ������ � ������������ (x, y)
  Procedure ReadC( x, y: integer; Var z: complex);
  /// ������� ����������� ����� z �� ����� � ������ � ������������ (x, y)
  Procedure WriteC(x, y: integer; z: complex);
  /// ����������� ����������� ����� z
  Procedure Inv(z: complex; var w: complex);
  Procedure Code(z: complex; var w: complex);
  /// ���������� ����������� ���� (0, 0)
  Function Zero(): complex;
  /// ���������� ����������� ������� (1, 0)
  Function One(): complex;
  /// ���������� ��������� �������� ���� ����������� ����� u � v
  Function Add(u, v: complex): complex;
  /// ���������� ��������� ��������� ���� ����������� ����� u � v
  Function Sub(u, v: complex): complex;
  /// ���������� ��������� ������������ ���� ����������� ����� u � v
  Function Mult(u, v: complex): complex;
  /// ���������� ��������� ������������ ������������� ����� a � ������������ ����� z
  Function Prod(a: real; z: complex): complex;
  /// ���������� ��������� ������� ���� ����������� ����� u � v
  Function Division(u, v: complex): complex;
  /// ���������� ������ ������������ ����� z
  Function Modul(z: complex): real;
  /// ���������� ��������� ���������� ������������ ����� z � ������� degree
  Function Pow(z: complex; degree: integer): complex;
  /// ���������� ���������� ������������ ����� z
  Function ExpC(z: complex): complex;
  /// ���������� ������� ������������ ����� z
  Function CosC(z: complex): complex;
  /// ���������� ����� ������������ ����� z
  Function SinC(z: complex): complex;
  
  //===== ===== ===== ===== ===== ������� ===== ===== ===== ===== =====
  
  /// ���������� ���� ������� ����������� �����
  Procedure ReadMatrixC(x, y: integer; Var a: matrixC);
  /// ������� ������� ����������� �����
  Procedure WriteMatrixC(x, y: integer; a: matrixC);
  /// ���������� ��������� �������� ������
  Function AddMatrix(a, b: matrixC): matrixC;
  /// ���������� ������������ ������
  Function MultMatrix(a, b: matrixC): matrixC;
  /// ���������� ��������� ���������� ������� z � ������� degree
  Function PowMatrix(z: matrixC; degree: integer): matrixC;
  /// ���������� ��������� ������������ ������������� ����� a � ������� z
  Function ProdRealMatrix(a: real; z: matrixC): matrixC;
  /// ���������� ��������� ������������ ������������ ����� a � ������� z
  Function ProdComplexMatrix(a: complex; z: matrixC): matrixC;
  /// ���������� ������� ������� [(0, 0),(0, 0),(0, 0),(0, 0)]
  Function ZeroMatrix(): matrixC;
  /// ���������� ��������� ������� [(1, 0),(0, 0),(0, 0),(1, 0)]
  Function OneMatrix(): matrixC;
  /// ���������� ������ ������� a
  Function NormMatrix(a: matrixC): real;
  /// ���������� ���������� ������� a
  Function ExpM(a: matrixC): matrixC;
  /// ���������� ������� ������� a
  Function CosM(a: matrixC): matrixC;
  /// ���������� ����� ������� a
  Function SinM(a: matrixC): matrixC;
  
Implementation
  
  //===== ===== ===== ===== ===== ����������� ����� ===== ===== ===== ===== =====
  
  Procedure ReadC( x, y: integer; Var z: complex);
  begin
    GoToXY(20, 20); Write('Enter the z.Re: '); Readln(z.Re);
    GoToXY(x, y); Writeln('(', z.Re:6:2, ', ');
    GoToXY(20, 20); Write('                              ');
    
    GoToXY(20, 20); Write('Enter the z.Im: '); Readln(z.Im);
    GoToXY(x + 9, y); Writeln(z.Im:6:2, ')');
    GoToXY(20, 20); Write('                              ');
  end;

  Procedure WriteC(x, y: integer; z: complex);
  begin
    GoToXY(x, y);
    Writeln('(', z.Re:6:2, ', ', z.Im:6:2, ')');
    GoToXY(20, 20);
  end;

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

  Function Zero(): complex;
  Var w: complex;
  begin
    w.Re:= 0;
    w.Im:= 0;
    Zero:= w;
  end;

  Function One(): complex;
  Var w: complex;
  begin
    w.Re:= 1;
    w.Im:= 0;
    One:= w;
  end;

  Function Add(u, v: complex): complex;
  Var w: complex;
  begin
    w.Re := u.Re + v.Re;
    w.Im := u.Im + v.Im;
    Add := w;
  end;

  Function Sub(u, v: complex): complex;
  Var w: complex;
  begin
    w.Re := u.Re - v.Re;
    w.Im := u.Im - v.Im;
    Sub := w;
  end;

  Function Mult(u, v: complex): complex;
  Var w: complex;
  begin
    w.Re := u.Re * v.Re - u.Im * v.Im;
    w.Im := u.Re * v.Im + u.Im * v.Re;
    Mult := w;
  end;

  Function Prod(a: real; z: complex): complex;
  Var w: complex;
  begin
    w.Re := a * z.Re;
    w.Im := a * z.Im;
    Prod := w;
  end;

  Function Division(u, v: complex): complex;
  Var z: complex;
  begin
    z.Re:= (u.Re * v.Re + u.Im * v.Im) / (sqr(v.Im) + sqr(v.Re));
    z.Im:= (u.Im * v.Re - u.Re * v.Im) / (sqr(v.Im) + sqr(v.Re));
    Division:= z;
  end;
  
  Function Modul(z: complex): real;
  begin
    Modul := sqrt(sqr(z.Re) + sqr(z.Im));
  end;
  
  Function Pow(z: complex; degree: integer): complex;
  Var i: integer;
      a: complex;
  begin
    a := z;
    for i := 2 to degree do a := Mult(a, z);
    Pow := a;
  end;
    
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
  
  //===== ===== ===== ===== ===== ������� ===== ===== ===== ===== =====
  
  Function AddMatrix(a, b: matrixC): matrixC;
  Var c: matrixC;
      i, j: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    c[i, j]:= Add(a[i, j], b[i, j]);
    AddMatrix:= c;
  end;
  
  Procedure ReadMatrixC(x, y: integer; Var a: matrixC);
  Var i, j: integer;
      z: complex;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    begin
      ReadC(x + (i - 1) * 16, y + (j - 1), z);
      a[i, j]:= z;
    end;
  end;
  
  Procedure WriteMatrixC(x, y: integer; a: matrixC);
  Var i, j: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    WriteC(x + (i - 1) * 16, y + (j - 1), a[i, j]);
  end;

  Function MultMatrix(a, b: matrixC): matrixC;
  Var c: matrixC;
      S, P: complex;
      i, j, k: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    begin
      S:= Zero();
      for k:= 1 to n do
      begin
        P:= Mult(a[i, k], b[k, j]);
        S:= Add(S, P);
      end;
      c[i, j]:= S;
    end;
    MultMatrix:= c;
  end;
  
  Function PowMatrix(z: matrixC; degree: integer): matrixC;
  Var i: integer;
      a: matrixC;
  begin
    a := z;
    for i := 2 to degree do a := MultMatrix(a, z);
    PowMatrix := a;
  end;
  
  Function ProdRealMatrix(a: real; z: matrixC): matrixC;
  Var c: matrixC;
      S, P: complex;
      i, j, k: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    begin
      S:= Zero();
      for k:= 1 to n do
      begin
        P:= Prod(a, z[k, j]);
        S:= Add(S, P);
      end;
      c[i, j]:= S;
    end;
    ProdRealMatrix:= c;
  end;
  
  Function ProdComplexMatrix(a: complex; z: matrixC): matrixC;
  Var c: matrixC;
      S, P: complex;
      i, j, k: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    begin
      S:= Zero();
      for k:= 1 to n do
      begin
        P:= Mult(a, z[k, j]);
        S:= Add(S, P);
      end;
      c[i, j]:= S;
    end;
    ProdComplexMatrix:= c;
  end;
  
  Function ZeroMatrix(): matrixC;
  Var a: matrixC;
      i, j: integer;
  begin
    for i:= 1 to n do
    for j:= 1 to n do
    a[i, j]:= Zero();
    ZeroMatrix:= a;
  end;
  
  Function OneMatrix(): matrixC;
  Var a: matrixC;
      k: integer;
  begin
    a:= ZeroMatrix();
    for k:= 1 to n do a[k, k]:= One();
    OneMatrix:= a;
  end;
  
  Function NormMatrix(a: matrixC): real;
  Var S, z: real;
      i, j: integer;
  begin
    z:= 0;
    for i:= 1 to n do
    begin
      S:= 0;
      for j:= 1 to n do S:= S + Modul(a[i, j]);
      if (S > z) then z:= S;
    end;
    NormMatrix:= z;
  end;
  
  Function ExpM(a: matrixC): matrixC;
  Var S, P: matrixC;
      k: integer;
  begin
    P:= OneMatrix();
    S:= OneMatrix();
    k:= 0;
    while NormMatrix(P) >= eps do
    begin
      k:= k + 1;
      P:= MultMatrix(P, a);
      P:= ProdRealMatrix(1/k, P);
      S:= AddMatrix(S, P);
    end;
    ExpM:= S;
  end;
  
  Function CosM(a: matrixC): matrixC;
  Var k: integer;
      a2, P, S: matrixC;
  begin
    a2:= PowMatrix(a, 2);
    k:= 0; P:= OneMatrix(); S:= OneMatrix();
    while NormMatrix(P) >= eps do
    begin
      k:= k + 2;
      P:= MultMatrix(P, a2);
      P:= ProdRealMatrix(1/k/(k-1), P);
      S:= AddMatrix(S, P);
    end;
    CosM:= S;
  end;
  
  Function SinM(a: matrixC): matrixC;
  Var k: integer;
      a2, P, S: matrixC;
  begin
    a2:= PowMatrix(a, 2);
    k:= 1; P:= a; S:= a;
    while NormMatrix(P) >= eps do
    begin
      k:= k + 2;
      P:= MultMatrix(P, a2);
      P:= ProdRealMatrix(1/k/(k-1), P);
      S:= AddMatrix(S, P);
    end;
    SinM:= S;
  end;
End.