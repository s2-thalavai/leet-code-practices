/**

Java Streams (Functional – Java 8+)
Declarative style. Less performant, but elegant for small datasets.

**/
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class TwoSumFunctional {
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = IntStream.range(0, nums.length)
            .boxed()
            .collect(Collectors.toMap(i -> nums[i], i -> i, (a, b) -> b));

        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (map.containsKey(complement) && map.get(complement) != i) {
                return new int[] { i, map.get(complement) };
            }
        }
        throw new IllegalArgumentException("No solution found");
    }

    public static void main(String[] args) {
        int[] nums = {3, 2, 4};
        int target = 6;

        int[] result = twoSum(nums, target);
        System.out.println("Indices: [" + result[0] + ", " + result[1] + "]");
    }
}
