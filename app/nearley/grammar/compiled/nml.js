// Generated automatically by nearley, version 2.19.6
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

    // LR: As this is transpiled from ES6 module export we need to specify the default
    const lexer = require("../../lexer/lexer").default;
    const ast = require("../../ast/ast").default;
var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "noop", "symbols": ["_"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"], "postprocess": _ => null},
    {"name": "__$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", (lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"], "postprocess": _ => null},
    {"name": "number", "symbols": ["integer"], "postprocess": id},
    {"name": "number", "symbols": ["decimal"], "postprocess": id},
    {"name": "integer", "symbols": [(lexer.has("integer") ? {type: "integer"} : integer)], "postprocess": d => ast.number(d[0])},
    {"name": "decimal", "symbols": [(lexer.has("decimal") ? {type: "decimal"} : decimal)], "postprocess": d => ast.number(d[0])},
    {"name": "convertTo", "symbols": [{"literal":"as"}], "postprocess": id},
    {"name": "convertTo", "symbols": [{"literal":"to"}], "postprocess": id},
    {"name": "convertTo", "symbols": [{"literal":"in"}], "postprocess": id},
    {"name": "FormatSystem", "symbols": ["header"], "postprocess": v => null},
    {"name": "FormatSystem", "symbols": ["comment"], "postprocess": v => null},
    {"name": "header", "symbols": ["_", (lexer.has("header") ? {type: "header"} : header)]},
    {"name": "comment", "symbols": ["_", (lexer.has("comment") ? {type: "comment"} : comment)]},
    {"name": "VariableSystem", "symbols": ["variable_assignment"], "postprocess": id},
    {"name": "variable", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier)], "postprocess": d => ast.variable(d[0])},
    {"name": "variable_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "variable_value"], "postprocess": d => ast.variable(d[0], d[3])},
    {"name": "variable_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "PercentageSystem"], "postprocess": d => ast.variable(d[0], d[4])},
    {"name": "variable_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "UoMSystem"], "postprocess": d => ast.variable(d[0], d[4])},
    {"name": "variable_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "CurrencySystem"], "postprocess": d => ast.variable(d[0], d[4])},
    {"name": "variable_assignment", "symbols": [(lexer.has("identifier") ? {type: "identifier"} : identifier), "_", {"literal":"="}, "_", "HexSystem"], "postprocess": d => ast.variable(d[0], d[4])},
    {"name": "variable_value", "symbols": ["PemdasSystem"], "postprocess": id},
    {"name": "PemdasSystem", "symbols": ["_", "AS", "_"], "postprocess": (d) => d[1]},
    {"name": "P", "symbols": [{"literal":"("}, "_", "AS", "_", {"literal":")"}], "postprocess": d => d[2]},
    {"name": "P", "symbols": ["N"], "postprocess": id},
    {"name": "E", "symbols": ["P", "_", (lexer.has("exponent") ? {type: "exponent"} : exponent), "_", "E"], "postprocess": d => ast.exponent(d[0], d[4])},
    {"name": "E", "symbols": ["P"], "postprocess": id},
    {"name": "MD", "symbols": ["MD", "_", (lexer.has("multiply") ? {type: "multiply"} : multiply), "_", "E"], "postprocess": d => ast.multiply(d[0], d[4])},
    {"name": "MD", "symbols": ["MD", "_", (lexer.has("divide") ? {type: "divide"} : divide), "_", "E"], "postprocess": d => ast.divide(d[0], d[4])},
    {"name": "MD", "symbols": ["MD", "_", (lexer.has("modulo") ? {type: "modulo"} : modulo), "_", "E"], "postprocess": d => ast.modulo(d[0], d[4])},
    {"name": "MD", "symbols": ["E"], "postprocess": id},
    {"name": "AS", "symbols": ["AS", "_", (lexer.has("add") ? {type: "add"} : add), "_", "MD"], "postprocess": d => ast.add(d[0], d[4])},
    {"name": "AS", "symbols": ["AS", "_", (lexer.has("subtract") ? {type: "subtract"} : subtract), "_", "MD"], "postprocess": d => ast.subtract(d[0], d[4])},
    {"name": "AS", "symbols": ["MD"], "postprocess": id},
    {"name": "N", "symbols": ["unit"], "postprocess": id},
    {"name": "N", "symbols": ["currency"], "postprocess": id},
    {"name": "N", "symbols": ["percent"], "postprocess": id},
    {"name": "N", "symbols": ["integer"], "postprocess": id},
    {"name": "N", "symbols": ["decimal"], "postprocess": id},
    {"name": "N", "symbols": ["hex32"], "postprocess": id},
    {"name": "N", "symbols": ["hex64"], "postprocess": id},
    {"name": "N", "symbols": ["variable"], "postprocess": id},
    {"name": "N", "symbols": [{"literal":"sin"}, "_", "P"], "postprocess": d => ast.sin(d[2])},
    {"name": "N", "symbols": [{"literal":"cos"}, "_", "P"], "postprocess": d => ast.cos(d[2])},
    {"name": "N", "symbols": [{"literal":"tan"}, "_", "P"], "postprocess": d => ast.tan(d[2])},
    {"name": "N", "symbols": [{"literal":"asin"}, "_", "P"], "postprocess": d => ast.asin(d[2])},
    {"name": "N", "symbols": [{"literal":"acos"}, "_", "P"], "postprocess": d => ast.acos(d[2])},
    {"name": "N", "symbols": [{"literal":"atan"}, "_", "P"], "postprocess": d => ast.atan(d[2])},
    {"name": "N", "symbols": [{"literal":"Pi"}], "postprocess": d => ast.constant(Math.PI)},
    {"name": "N", "symbols": [{"literal":"E"}], "postprocess": d => ast.constant(Math.E)},
    {"name": "N", "symbols": [{"literal":"sqrt"}, "_", "P"], "postprocess": d => ast.sqrt(d[2])},
    {"name": "N", "symbols": [{"literal":"ln"}, "_", "P"], "postprocess": d => ast.logarithm(d[2])},
    {"name": "UoMSystem", "symbols": ["convertUoMToUoM"], "postprocess": id},
    {"name": "unit", "symbols": ["number", "_", "unitOfMeasurement"], "postprocess": ([v,,u]) => ast.unit(v, u)},
    {"name": "convertUoMToUoM", "symbols": ["unit", "_", "convertTo", "_", "unitOfMeasurement"], "postprocess": ([v,,,,b]) => ast.unitConversion(v, b)},
    {"name": "convertUoMToUoM", "symbols": ["variable", "_", "convertTo", "_", "unitOfMeasurement"], "postprocess": ([v,,,,b]) => ast.unitConversion(v, b)},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mm") ? {type: "uom_mm"} : uom_mm)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cm") ? {type: "uom_cm"} : uom_cm)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [{"literal":"in"}], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [{"literal":"inch"}], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [{"literal":"inches"}], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ftus") ? {type: "uom_ftus"} : uom_ftus)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft") ? {type: "uom_ft"} : uom_ft)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mi") ? {type: "uom_mi"} : uom_mi)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mm2") ? {type: "uom_mm2"} : uom_mm2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cm2") ? {type: "uom_cm2"} : uom_cm2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m2") ? {type: "uom_m2"} : uom_m2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ha") ? {type: "uom_ha"} : uom_ha)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_km2") ? {type: "uom_km2"} : uom_km2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_in2") ? {type: "uom_in2"} : uom_in2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft2") ? {type: "uom_ft2"} : uom_ft2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ac") ? {type: "uom_ac"} : uom_ac)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mi2") ? {type: "uom_mi2"} : uom_mi2)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mcg") ? {type: "uom_mcg"} : uom_mcg)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mg") ? {type: "uom_mg"} : uom_mg)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kg") ? {type: "uom_kg"} : uom_kg)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_oz") ? {type: "uom_oz"} : uom_oz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_lb") ? {type: "uom_lb"} : uom_lb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mt") ? {type: "uom_mt"} : uom_mt)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mm3") ? {type: "uom_mm3"} : uom_mm3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cm3") ? {type: "uom_cm3"} : uom_cm3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ml") ? {type: "uom_ml"} : uom_ml)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kl") ? {type: "uom_kl"} : uom_kl)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m3") ? {type: "uom_m3"} : uom_m3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_km3") ? {type: "uom_km3"} : uom_km3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_tsp") ? {type: "uom_tsp"} : uom_tsp)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Tbs") ? {type: "uom_Tbs"} : uom_Tbs)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_in3") ? {type: "uom_in3"} : uom_in3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_floz") ? {type: "uom_floz"} : uom_floz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cup") ? {type: "uom_cup"} : uom_cup)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_pnt") ? {type: "uom_pnt"} : uom_pnt)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_qt") ? {type: "uom_qt"} : uom_qt)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_gal") ? {type: "uom_gal"} : uom_gal)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft3") ? {type: "uom_ft3"} : uom_ft3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_yd3") ? {type: "uom_yd3"} : uom_yd3)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mm3_s") ? {type: "uom_mm3_s"} : uom_mm3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cm3_s") ? {type: "uom_cm3_s"} : uom_cm3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ml_s") ? {type: "uom_ml_s"} : uom_ml_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cl_s") ? {type: "uom_cl_s"} : uom_cl_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_dl_s") ? {type: "uom_dl_s"} : uom_dl_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_l_s") ? {type: "uom_l_s"} : uom_l_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_l_min") ? {type: "uom_l_min"} : uom_l_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_l_h") ? {type: "uom_l_h"} : uom_l_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kl_s") ? {type: "uom_kl_s"} : uom_kl_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kl_min") ? {type: "uom_kl_min"} : uom_kl_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kl_h") ? {type: "uom_kl_h"} : uom_kl_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m3_s") ? {type: "uom_m3_s"} : uom_m3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m3_min") ? {type: "uom_m3_min"} : uom_m3_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m3_h") ? {type: "uom_m3_h"} : uom_m3_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_km3_s") ? {type: "uom_km3_s"} : uom_km3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_tsp_s") ? {type: "uom_tsp_s"} : uom_tsp_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Tbs_s") ? {type: "uom_Tbs_s"} : uom_Tbs_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_in3_s") ? {type: "uom_in3_s"} : uom_in3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_in3_min") ? {type: "uom_in3_min"} : uom_in3_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_in3_h") ? {type: "uom_in3_h"} : uom_in3_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_floz_s") ? {type: "uom_floz_s"} : uom_floz_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_floz_min") ? {type: "uom_floz_min"} : uom_floz_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_floz_h") ? {type: "uom_floz_h"} : uom_floz_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_cup_s") ? {type: "uom_cup_s"} : uom_cup_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_pnt_s") ? {type: "uom_pnt_s"} : uom_pnt_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_pnt_min") ? {type: "uom_pnt_min"} : uom_pnt_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_pnt_h") ? {type: "uom_pnt_h"} : uom_pnt_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_qt_s") ? {type: "uom_qt_s"} : uom_qt_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_gal_s") ? {type: "uom_gal_s"} : uom_gal_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_gal_min") ? {type: "uom_gal_min"} : uom_gal_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_gal_h") ? {type: "uom_gal_h"} : uom_gal_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft3_s") ? {type: "uom_ft3_s"} : uom_ft3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft3_min") ? {type: "uom_ft3_min"} : uom_ft3_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft3_h") ? {type: "uom_ft3_h"} : uom_ft3_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_yd3_s") ? {type: "uom_yd3_s"} : uom_yd3_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_yd3_min") ? {type: "uom_yd3_min"} : uom_yd3_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_yd3_h") ? {type: "uom_yd3_h"} : uom_yd3_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ns") ? {type: "uom_ns"} : uom_ns)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mu") ? {type: "uom_mu"} : uom_mu)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ms") ? {type: "uom_ms"} : uom_ms)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_min") ? {type: "uom_min"} : uom_min)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_week") ? {type: "uom_week"} : uom_week)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_month") ? {type: "uom_month"} : uom_month)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_year") ? {type: "uom_year"} : uom_year)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Hz") ? {type: "uom_Hz"} : uom_Hz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mHz") ? {type: "uom_mHz"} : uom_mHz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kHz") ? {type: "uom_kHz"} : uom_kHz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MHz") ? {type: "uom_MHz"} : uom_MHz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GHz") ? {type: "uom_GHz"} : uom_GHz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_THz") ? {type: "uom_THz"} : uom_THz)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_rpm") ? {type: "uom_rpm"} : uom_rpm)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_deg_s") ? {type: "uom_deg_s"} : uom_deg_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_rad_s") ? {type: "uom_rad_s"} : uom_rad_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m_s") ? {type: "uom_m_s"} : uom_m_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_km_h") ? {type: "uom_km_h"} : uom_km_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m_h") ? {type: "uom_m_h"} : uom_m_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_knot") ? {type: "uom_knot"} : uom_knot)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ft_s") ? {type: "uom_ft_s"} : uom_ft_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_s_m") ? {type: "uom_s_m"} : uom_s_m)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_min_km") ? {type: "uom_min_km"} : uom_min_km)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_s_ft") ? {type: "uom_s_ft"} : uom_s_ft)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_min_ft") ? {type: "uom_min_ft"} : uom_min_ft)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Pa") ? {type: "uom_Pa"} : uom_Pa)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_hPa") ? {type: "uom_hPa"} : uom_hPa)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kPa") ? {type: "uom_kPa"} : uom_kPa)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MPa") ? {type: "uom_MPa"} : uom_MPa)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_bar") ? {type: "uom_bar"} : uom_bar)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_torr") ? {type: "uom_torr"} : uom_torr)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_psi") ? {type: "uom_psi"} : uom_psi)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ksi") ? {type: "uom_ksi"} : uom_ksi)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Kb") ? {type: "uom_Kb"} : uom_Kb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Mb") ? {type: "uom_Mb"} : uom_Mb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Gb") ? {type: "uom_Gb"} : uom_Gb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Tb") ? {type: "uom_Tb"} : uom_Tb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_KB") ? {type: "uom_KB"} : uom_KB)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MB") ? {type: "uom_MB"} : uom_MB)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GB") ? {type: "uom_GB"} : uom_GB)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_TB") ? {type: "uom_TB"} : uom_TB)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_lx") ? {type: "uom_lx"} : uom_lx)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ftcd") ? {type: "uom_ftcd"} : uom_ftcd)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ppm") ? {type: "uom_ppm"} : uom_ppm)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ppb") ? {type: "uom_ppb"} : uom_ppb)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ppt") ? {type: "uom_ppt"} : uom_ppt)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_ppq") ? {type: "uom_ppq"} : uom_ppq)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mV") ? {type: "uom_mV"} : uom_mV)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kV") ? {type: "uom_kV"} : uom_kV)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mA") ? {type: "uom_mA"} : uom_mA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kA") ? {type: "uom_kA"} : uom_kA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mW") ? {type: "uom_mW"} : uom_mW)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kW") ? {type: "uom_kW"} : uom_kW)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MW") ? {type: "uom_MW"} : uom_MW)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GW") ? {type: "uom_GW"} : uom_GW)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_VA") ? {type: "uom_VA"} : uom_VA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mVA") ? {type: "uom_mVA"} : uom_mVA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kVA") ? {type: "uom_kVA"} : uom_kVA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MVA") ? {type: "uom_MVA"} : uom_MVA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GVA") ? {type: "uom_GVA"} : uom_GVA)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_VAR") ? {type: "uom_VAR"} : uom_VAR)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mVAR") ? {type: "uom_mVAR"} : uom_mVAR)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kVAR") ? {type: "uom_kVAR"} : uom_kVAR)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MVAR") ? {type: "uom_MVAR"} : uom_MVAR)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GVAR") ? {type: "uom_GVAR"} : uom_GVAR)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_Wh") ? {type: "uom_Wh"} : uom_Wh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mWh") ? {type: "uom_mWh"} : uom_mWh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kWh") ? {type: "uom_kWh"} : uom_kWh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MWh") ? {type: "uom_MWh"} : uom_MWh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GWh") ? {type: "uom_GWh"} : uom_GWh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_VARh") ? {type: "uom_VARh"} : uom_VARh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_mVARh") ? {type: "uom_mVARh"} : uom_mVARh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kVARh") ? {type: "uom_kVARh"} : uom_kVARh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_MVARh") ? {type: "uom_MVARh"} : uom_MVARh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_GVARh") ? {type: "uom_GVARh"} : uom_GVARh)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_deg") ? {type: "uom_deg"} : uom_deg)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_rad") ? {type: "uom_rad"} : uom_rad)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_grad") ? {type: "uom_grad"} : uom_grad)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_arcmin") ? {type: "uom_arcmin"} : uom_arcmin)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_arcsec") ? {type: "uom_arcsec"} : uom_arcsec)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_m") ? {type: "uom_m"} : uom_m)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_g") ? {type: "uom_g"} : uom_g)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_t") ? {type: "uom_t"} : uom_t)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_l") ? {type: "uom_l"} : uom_l)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_C") ? {type: "uom_C"} : uom_C)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_F") ? {type: "uom_F"} : uom_F)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_K") ? {type: "uom_K"} : uom_K)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_R") ? {type: "uom_R"} : uom_R)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_s") ? {type: "uom_s"} : uom_s)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_h") ? {type: "uom_h"} : uom_h)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_d") ? {type: "uom_d"} : uom_d)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_b") ? {type: "uom_b"} : uom_b)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_B") ? {type: "uom_B"} : uom_B)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_V") ? {type: "uom_V"} : uom_V)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_A") ? {type: "uom_A"} : uom_A)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_W") ? {type: "uom_W"} : uom_W)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_J") ? {type: "uom_J"} : uom_J)], "postprocess": id},
    {"name": "unitOfMeasurement", "symbols": [(lexer.has("uom_kJ") ? {type: "uom_kJ"} : uom_kJ)], "postprocess": id},
    {"name": "CurrencySystem", "symbols": ["currencyConversion"], "postprocess": id},
    {"name": "currency", "symbols": [(lexer.has("currencySymbol") ? {type: "currencySymbol"} : currencySymbol), "_", "number"], "postprocess": ([c,,v]) => ast.currency(v, c)},
    {"name": "currency", "symbols": ["number", "_", (lexer.has("currencyCode") ? {type: "currencyCode"} : currencyCode)], "postprocess": ([v,,c]) => ast.currency(v, c)},
    {"name": "currencyConversion", "symbols": ["currency", "_", (lexer.has("convertTo") ? {type: "convertTo"} : convertTo), "_", (lexer.has("currencyCode") ? {type: "currencyCode"} : currencyCode)], "postprocess": ([a,,,,b]) => ast.currencyConversion(a, b)},
    {"name": "currencyConversion", "symbols": ["currency", "_", (lexer.has("convertTo") ? {type: "convertTo"} : convertTo), "_", (lexer.has("currencySymbol") ? {type: "currencySymbol"} : currencySymbol)], "postprocess": ([a,,,,b]) => ast.currencyConversion(a, b)},
    {"name": "PercentageSystem", "symbols": ["percentageOf"], "postprocess": id},
    {"name": "PercentageSystem", "symbols": ["percentageIncrease"], "postprocess": id},
    {"name": "PercentageSystem", "symbols": ["percentageDecrease"], "postprocess": id},
    {"name": "percent", "symbols": ["number", "_", {"literal":"%"}], "postprocess": ([v]) => ast.percent(v)},
    {"name": "percentageOf", "symbols": ["percent", "_", {"literal":"of"}, "_", "number"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["percent", "_", {"literal":"of"}, "_", "unit"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["percent", "_", {"literal":"of"}, "_", "currency"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["percent", "_", {"literal":"of"}, "_", "variable"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["variable", "_", {"literal":"of"}, "_", "number"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["variable", "_", {"literal":"of"}, "_", "unit"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["variable", "_", {"literal":"of"}, "_", "currency"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageOf", "symbols": ["variable", "_", {"literal":"of"}, "_", "variable"], "postprocess": ([v,,,,p]) => ast.percentOf(v, p)},
    {"name": "percentageIncrease", "symbols": [{"literal":"increase"}, "_", "number", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentIncrease(v, p)},
    {"name": "percentageIncrease", "symbols": [{"literal":"increase"}, "_", "unit", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentIncrease(v, p)},
    {"name": "percentageIncrease", "symbols": [{"literal":"increase"}, "_", "currency", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentIncrease(v, p)},
    {"name": "percentageIncrease", "symbols": [{"literal":"increase"}, "_", "variable", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentIncrease(v, p)},
    {"name": "percentageIncrease", "symbols": [{"literal":"increase"}, "_", "variable", "_", {"literal":"by"}, "_", "variable"], "postprocess": ([,,v,,,,p]) => ast.percentIncrease(v, p)},
    {"name": "percentageDecrease", "symbols": [{"literal":"decrease"}, "_", "number", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentDecrease(v, p)},
    {"name": "percentageDecrease", "symbols": [{"literal":"decrease"}, "_", "unit", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentDecrease(v, p)},
    {"name": "percentageDecrease", "symbols": [{"literal":"decrease"}, "_", "currency", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentDecrease(v, p)},
    {"name": "percentageDecrease", "symbols": [{"literal":"decrease"}, "_", "variable", "_", {"literal":"by"}, "_", "percent"], "postprocess": ([,,v,,,,p]) => ast.percentDecrease(v, p)},
    {"name": "percentageDecrease", "symbols": [{"literal":"decrease"}, "_", "variable", "_", {"literal":"by"}, "_", "variable"], "postprocess": ([,,v,,,,p]) => ast.percentDecrease(v, p)},
    {"name": "HexSystem", "symbols": ["hexBitshiftRight"], "postprocess": id},
    {"name": "HexSystem", "symbols": ["hexBitshiftLeft"], "postprocess": id},
    {"name": "HexSystem", "symbols": ["hexBitshiftRightUnsigned"], "postprocess": id},
    {"name": "hex", "symbols": ["hex32"], "postprocess": id},
    {"name": "hex", "symbols": ["hex64"], "postprocess": id},
    {"name": "hex32", "symbols": [(lexer.has("hex32") ? {type: "hex32"} : hex32)], "postprocess": d => ast.hex32(d[0])},
    {"name": "hex64", "symbols": [(lexer.has("hex64") ? {type: "hex64"} : hex64)], "postprocess": d => ast.hex64(d[0])},
    {"name": "hexBitshiftRight", "symbols": ["hex", "_", {"literal":">>"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftRight(h, b)},
    {"name": "hexBitshiftRight", "symbols": ["variable", "_", {"literal":">>"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftRight(h, b)},
    {"name": "hexBitshiftLeft", "symbols": ["hex", "_", {"literal":"<<"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftLeft(h, b)},
    {"name": "hexBitshiftLeft", "symbols": ["variable", "_", {"literal":"<<"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftLeft(h, b)},
    {"name": "hexBitshiftRightUnsigned", "symbols": ["hex32", "_", {"literal":">>>"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftRightUnsigned(h, b)},
    {"name": "hexBitshiftRightUnsigned", "symbols": ["variable", "_", {"literal":">>>"}, "_", "integer"], "postprocess": ([h,,,,b]) => ast.bitwiseShiftRightUnsigned(h, b)},
    {"name": "main", "symbols": ["FormatSystem"], "postprocess": id},
    {"name": "main", "symbols": ["VariableSystem"], "postprocess": id},
    {"name": "main", "symbols": ["PemdasSystem"], "postprocess": id},
    {"name": "main", "symbols": ["PercentageSystem"], "postprocess": id},
    {"name": "main", "symbols": ["UoMSystem"], "postprocess": id},
    {"name": "main", "symbols": ["CurrencySystem"], "postprocess": id},
    {"name": "main", "symbols": ["HexSystem"], "postprocess": id}
]
  , ParserStart: "main"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
