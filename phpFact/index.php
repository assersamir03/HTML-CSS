<?php

function decFact($end){
    $result=1;
    while ($end>=1) {
        $result *=$end;
        $end -=1;
    }
    return $result;
}
print(decFact(5));