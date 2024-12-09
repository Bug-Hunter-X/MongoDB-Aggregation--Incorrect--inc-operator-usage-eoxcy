# MongoDB Aggregation Pipeline Bug: Incorrect $inc Operator Usage

This repository demonstrates a common error in MongoDB aggregation pipelines: the incorrect usage of the `$inc` operator.  The `$inc` operator is intended to increment a field, but when used outside of the `$group` stage, it modifies the existing document instead of creating a new one.  This can lead to unexpected results and data corruption.

## Bug Description:
The provided code snippet attempts to increment the `totalQuantity` field by 10. However, it does so outside the aggregation pipeline's `$group` stage. Instead of adding to the summed quantity, it directly modifies the `totalQuantity` of the output, resulting in an incorrect total.

## Solution:
The `$inc` operator should be used within the `$group` stage to correctly sum the quantities. If post-aggregation modification is needed, a separate update operation is necessary.
