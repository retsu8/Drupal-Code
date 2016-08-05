<?php
$nid= arg(1);
$node = node_load($nid);
$user_mid = $node->field_portfolio_manager_username['und'][0]['value'];
?>
<a href="http://54.186.135.80/mid/<?php echo $user_mid ?>" target="_blank">Click for graph</a>

<?php
$nid= arg(1);
$node = node_load($nid);
$user_mid = $node->field_portfolio_manager_username['und'][0]['value'];
?>
<a href="http://ec2-54-200-79-214.us-west-2.compute.amazonaws.com/mid/<?php echo $user_mid ?>" target="_blank">Click for graph</a>
