<?php
$nid= arg(1);
$node = node_load($nid);
$user_mid = $node->field_portfolio_manager_username['und'][0]['value'];
?>
<center>
<a href="http://54.186.135.80:8000/mid/<?php echo $user_mid ?>">Click for graph</a>
</center>
